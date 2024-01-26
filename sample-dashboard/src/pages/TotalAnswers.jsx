// TotalAnswers.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TotalAnswers = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch all answers for the given questionId
    fetch(`http://localhost:8080/api/total-answers/${questionId}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error('Error fetching answers:', data.error);
          // Handle the error, e.g., show a user-friendly message
        } else {
          setAnswers(data);
        }
      })
      .catch(error => console.error('Error fetching answers:', error));
  }, [questionId]);

  const handleLikeDislike = (answerId, action) => {
    fetch(`http://localhost:8080/api/like-answer/${answerId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Refresh the answers after like/dislike
          fetch(`http://localhost:8080/api/total-answers/${questionId}`)
            .then(response => response.json())
            .then(data => {
              if (data.error) {
                console.error('Error fetching answers:', data.error);
                // Handle the error, e.g., show a user-friendly message
              } else {
                setAnswers(data);
              }
            })
            .catch(error => console.error('Error fetching answers:', error));
        } else {
          console.error('Error liking/disliking answer');
        }
      })
      .catch(error => console.error('Error liking/disliking answer:', error));
  };

  return (
    <div className="bg-blue-400 h-screen">
      {/* Header */}
      <header className="bg-blue-600 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Tech Query</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-300 p-2">
        <div className="container mx-auto">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-black-1000 hover:text-white"><b>Dashboard</b></Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6 mt-10 bg-white rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Total Answers</h2>
        {answers.map((answer, index) => (
          <div key={answer.answerId} className="mb-8">
            <p className="text-lg font-semibold mb-2">Answer {index + 1}:</p>
            <p className="text-gray-800 mb-4">{answer.explanation}</p>
            <p className="text-lg font-semibold mb-2">Code Snippet:</p>
            <p className="text-gray-800 mb-4">{answer.codeSnippet}</p>
            {/* Add other details as needed */}
            {/* Like and Dislike buttons */}
            <div className="flex items-center">
              <button className="mr-4" onClick={() => handleLikeDislike(answer.answerId, 'like')}>
                Like ({answer.likes})
              </button>
              <button onClick={() => handleLikeDislike(answer.answerId, 'dislike')}>
                Dislike ({answer.dislikes})
              </button>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalAnswers;
