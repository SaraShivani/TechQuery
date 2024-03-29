const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'techquerydb',
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/add-question', (req, res) => {
  const { questionId, name, topic, codeSnippet } = req.body;

  const query = 'INSERT INTO questions (questionId, name, topic, codeSnippet) VALUES (?, ?, ?, ?)';
  pool.query(query, [questionId, name, topic, codeSnippet], (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log('Data inserted successfully');
    return res.status(200).json({ success: true });
  });
});

app.get('/api/get-questions', (req, res) => {
  const query = 'SELECT * FROM questions';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json(results);
  });
});
app.get('/api/questions/:category', (req, res) => {
  const category = req.params.category;
  const query = `
    SELECT q.*, a.explanation AS answerExplanation
    FROM questions q
    LEFT JOIN answers a ON q.questionId = a.questionId
    WHERE q.topic = ?
    ORDER BY q.createdAt DESC
  `;
  pool.query(query, [category], (error, results) => {
    if (error) {
      console.error('Error fetching category questions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const formattedResults = results.map((result) => ({
      questionId: result.questionId,
      name: result.name,
      topic: result.topic,
      codeSnippet: result.codeSnippet,
      createdAt: result.createdAt,
      answerExplanation: result.answerExplanation,
    }));

    return res.status(200).json(formattedResults);
  });
});


app.get('/api/question-details/:questionId', (req, res) => {
  const questionId = req.params.questionId;
  const query = `
    SELECT q.*, a.explanation, a.codeSnippet, a.attachment
    FROM questions q
    LEFT JOIN answers a ON q.questionId = a.questionId
    WHERE q.questionId = ?
  `;
  pool.query(query, [questionId], (error, results) => {
    if (error) {
      console.error('Error fetching question details:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }

    return res.status(200).json(results[0]);
  });
});


app.post('/api/submit-answer/:questionId', (req, res) => {
  const questionId =req.params.questionId;
  const { explanation, codeSnippet, attachment } = req.body;

  const query = 'INSERT INTO answers (questionId, explanation, codeSnippet, attachment) VALUES (?, ?, ?, ?)';
  pool.query(query, [questionId, explanation, codeSnippet, attachment], (error, results) => {
    if (error) {
      console.error('Error inserting answer:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log('Answer inserted successfully');
    return res.status(200).json({ success: true });
  });
});

app.get('/api/user-answers', (req, res) => {
  // Fetch user's recent answers
  const userId = 1; // Replace with the actual user ID
  const query = 'SELECT * FROM answers WHERE userId = ? ORDER BY createdAt DESC LIMIT 5';
  pool.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error fetching user answers:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json(results);
  });
});

// server.js
app.get('/api/get-latest-questions', (req, res) => {
  const query = 'SELECT * FROM questions ORDER BY createdAt DESC LIMIT 5'; // Adjust the limit as needed
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching latest questions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json(results);
  });
});
app.get('/api/total-answers/:questionId', (req, res) => {
  const questionId = req.params.questionId;
  // Implement logic to fetch all answers for the specified question
  const query = `
    SELECT *
    FROM answers
    WHERE questionId = ?
  `;
  pool.query(query, [questionId], (error, results) => {
    if (error) {
      console.error('Error fetching total answers:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json(results);
  });
});


// New endpoint to handle like and dislike
app.post('/api/like-answer/:answerId', (req, res) => {
  const answerId = req.params.answerId;
  const { action } = req.body;

  // Increment likes or dislikes based on the action
  const columnName = action === 'like' ? 'likes' : 'dislikes';
  const query = `UPDATE answers SET ${columnName} = ${columnName} + 1 WHERE answerId = ?`;

  pool.query(query, [answerId], (error, results) => {
    if (error) {
      console.error(`Error updating ${columnName} for answer:`, error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log(`${columnName} updated successfully`);
    return res.status(200).json({ success: true });
  });
});
app.get('/api/top-answer/:questionId', (req, res) => {
  const questionId = req.params.questionId;
  const query = `
    SELECT explanation
    FROM answers
    WHERE questionId = ?
    ORDER BY likes DESC
    LIMIT 1
  `;
  pool.query(query, [questionId], (error, results) => {
    if (error) {
      console.error('Error fetching top answer:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const topAnswer = results[0] ? results[0].explanation : null;
    return res.status(200).json({ explanation: topAnswer });
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
