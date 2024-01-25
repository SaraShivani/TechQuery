// CategoryQuestions.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CategoryQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryQuestions = async () => {
      try {
        const category = window.location.pathname.split('/').pop(); // Extract category from URL
        const response = await fetch(`http://localhost:8080/api/questions/${category}`);
        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching category questions:', error);
        setLoading(false);
      }
    };

    fetchCategoryQuestions();
  }, []); // Empty dependency array to run the effect only once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-300 via-emerald-200 to-green-700">
        {/* ======= Header ======= */}
        {/* ... Header code remains the same ... */}
        <main id="main" className="main">
          <div className="pagetitle">
            {/* ... Page Title code remains the same ... */}
          </div>
          {/* End Page Title */}
          <div className="lg:w-2/3 pr-4 pl-4">
            <div className="relative flex flex-col h-[100%] min-w-0 rounded break-words border bg-blue-300 border-1 border-black-300 info-card revenue-card">
              <div className="flex-auto p-6">
                <h5 className="mb-3 text-2xl">Category Questions</h5>
                <ul>
                  {questions.map((question) => (
                    <li key={question.questionId} className="mb-3">
                      <strong>{question.name}</strong>
                      <p>{question.topic}</p>
                      {question.submittedAnswer ? (
                        <div>
                          <p>Answer for this question is already submitted</p>
                          <Link to={`/submit-answer/${question.questionId}`}>
                            <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
                              Submit Another Response
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <Link to={`/submit-answer/${question.questionId}`}>
                          <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
                            Answer
                          </button>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CategoryQuestions;
