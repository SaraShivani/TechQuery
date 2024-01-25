// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch latest questions by default
    fetchQuestions();
  }, []);
  console.log('Questions:', questions); // Add this line
  const fetchQuestions = (category = null) => {
    const url = category
      ? `http://localhost:8080/api/questions/${category}`
      : 'http://localhost:8080/api/get-latest-questions';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setQuestions(data);
        } else if (data.error) {
          console.error('Error fetching questions:', data.error);
          // Handle the error, e.g., show a user-friendly message
        }
      })
      .catch(error => console.error('Error fetching questions:', error));
  };

  const handleCategoryClick = (category) => {
    // Fetch questions based on the selected category
    fetchQuestions(category);
    setSelectedCategory(category);
    
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className="bg-white-100">
        <header id="header" className="header top-0 flex items-center bg-violet-900 text-white">
          <div className="flex items-center justify-between p-5">
            <a href="index.html" className="logo flex items-center">
              <span className="hidden lg:block text-3xl font-bold">Tech Query</span>
            </a>
          </div>
          <nav className="header-nav ms-auto">
            <ul className="flex items-center">
              <li className=" block lg:hidden">
                <a className="inline-block py-2 px-4 no-underline nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search" />
                </a>
              </li>
              <Link
                to="/post-question"
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded mr-8 px-3 leading-normal no-underline bg-pink-500 text-white hover:bg-blue-700"
              > 
                Post Question
              </Link>
              <button
                onClick={handleLogout}
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded mr-8 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700"
              >
                Log Out
              </button>
            </ul>
          </nav>
        </header>

        <main id="main" className="main">
          <div className="pagetitle">
          
            <nav>
              <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mt-4 mb-4 bg-white-300 rounded">
                <li className="inline-block px-2 py-2 text-gray-700">
                  <a href="#">
                    <b>Home</b>
                  </a>
                </li>
                <li className="inline-block px-2 py-2 text-gray-700 active">
                  <b>Dashboard</b>
                </li>
              </ol>
            </nav>
          </div>

          <section className="section dashboard">
            <div className="flex flex-wrap ">
              <div className="lg:w-full pr-4 pl-4 h-[65vh]">
                <div className="flex no-wrap">
                  <div className="lg:w-1/3 pr-4 pl-4">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-violet-100  border-3 border-black-900 info-card sales-card">
                      <div className="flex-auto p-3 h-[65vh]">
                        <h5 className="mb-3 text-2xl font-semibold p-5">Categories</h5>
                        <div className="flex items-center">
                          <span>
                            <div className="vertical-buttons ">
                              {['react', 'angular', 'javascript', 'bootstrap', 'html', 'css', 'python', 'jdbc', 'devops'].map(category => (
                                <button
                                  key={category}
                                  className={`m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal text-white -underline bg-violet-600 ${
                                    selectedCategory === category ? 'bg-violet-600 text-white' : 'bg-blue-300 text-black'
                                  } hover:bg-violet-400`}
                                  onClick={() => handleCategoryClick(category)}
                                >
                                  {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                              ))}
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/4 pr-4 pl-4 h-[65vh]">
                    <div className="relative flex flex-col h-[100%] min-w-0 rounded break-words border bg-purple-100 border-1 border-black-300 info-card revenue-card">
                      <div className="flex-auto p-6 ">
                        <h5 className="mb-3 text-2xl font-semibold">{selectedCategory ? `Questions - ${selectedCategory}` : 'Latest Questions'}</h5>
                        <div className="flex items-center">
                          <ul>
                          {questions.map((question) => (
  <li key={question.id}>
    <b>{question.name}{' '}</b>
    {/* Display the answer explanation for category-based questions */}
    {selectedCategory && question.answerExplanation && (
      <p><b>Answer:</b><i>{`${question.answerExplanation.substring(0, 100)}${question.answerExplanation.length > 100 ? '...' : ''}`}</i></p>
    )}
    {/* "See More" link to navigate to detailed answer view */}
    {question.answerExplanation && question.answerExplanation.length > 100 && (
      <>

        <Link to={`/question-details/${question.questionId}`}>
          <p className="text-red-500 cursor-pointer">
            See More
          </p>
        </Link>
      </>
    )}
    {/* Check if there are existing answers for the question */}
    {question.answerExplanation ? (
      // If there are existing answers, display "Submit Another Response" button
      <Link to={`/submit-answer/${question.questionId}`}>
        <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
          Submit Another Response
        </button>
      </Link>
    ) : (
      // If no existing answers, display the "Answer" button
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer" className="footer flex justify-center align-middle w-[99vw] bg-violet-900 text-white">
          <div className="copyright justify-center align-middle m-6">
            © Copyright{' '}
            <strong>
              <span>Tech Query</span>
            </strong>
            . All Rights Reserved
          </div>
        </footer>

        <a href="#" className="back-to-top flex items-center justify-center">
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
    </>
  );
};

export default Dashboard;
