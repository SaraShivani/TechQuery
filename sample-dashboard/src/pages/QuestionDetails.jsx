// QuestionDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const QuestionDetails = () => {
  const { questionId } = useParams();
  const [answerDetails, setAnswerDetails] = useState({});

  useEffect(() => {
    // Fetch answer details based on questionId
    fetch(`http://localhost:8080/api/question-details/${questionId}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error('Error fetching answer details:', data.error);
          // Handle the error, e.g., show a user-friendly message
        } else {
          setAnswerDetails(data);
        }
      })
      .catch(error => console.error('Error fetching answer details:', error));
  }, [questionId]);

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
        <h2 className="text-4xl font-bold mb-4">Answer Details</h2>
        <div>
          <p className="text-lg font-semibold mb-2">Explanation:</p>
          <p className="text-gray-800 mb-4">{answerDetails.explanation}</p>
          <p className="text-lg font-semibold mb-2">Code Snippet:</p>
          <p className="text-gray-800 mb-4">{answerDetails.codeSnippet}</p>
          {/* Add other details as needed */}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
