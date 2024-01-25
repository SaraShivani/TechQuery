// App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './pages/dashboard';
import PostQuestion from './pages/PostQuestion';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const addQuestion = async (newQuestion) => {
    try {
      const response = await fetch('http://localhost:8080/api/add-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });

      if (!response.ok) {
        throw new Error('Failed to add question');
      }

      console.log('Question added successfully');

      // Fetch updated questions after adding a new question
      fetchQuestions();
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/get-questions');
      if (response.ok) {
        const questions = await response.json();
        setSubmittedQuestions(questions);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const submitAnswer = async (newAnswer) => {
    try {
      const response = await fetch(`http://localhost:8080/api/submit-answer/${newAnswer.questionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnswer),
      });

      if (!response.ok) {
        throw new Error('Failed to submit answer');
      }

      console.log('Answer submitted successfully');
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Router>
        <AppRoutes
          questions={submittedQuestions}
          onQuestionSubmit={addQuestion}
          onAnswerSubmit={submitAnswer}
          isAuthenticated={isAuthenticated}
          setAuthenticated={setAuthenticated}
        />
      </Router>
    </div>
  );
}

export default App;
