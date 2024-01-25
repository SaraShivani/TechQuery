import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StarRating from './Starrating.jsx'; // Adjust the file path based on your project structure

//import Login from '../auth/Login';



const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);
const [totalAnswersCount, setTotalAnswersCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/api/get-questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/questions/${category}`);
  };  
  const handleLogout = () => {
    // Clear any authentication session or token
    // For example, if using localStorage:
    localStorage.removeItem('token'); // Replace 'token' with your actual token key
    // Navigate to the login page
    navigate('/login');
  };
  return (
    <>
      <div className="bg-white-100">
        {/* ======= Header ======= */}
        <header id="header" className="header top-0 flex items-center bg-violet-900 text-white ">
          <div className="flex items-center justify-between p-5">
            <a href="index.html" className="logo flex items-center" >
              <span className=" font-bold hidden lg:block text-3xl">Tech Query</span>
            </a>
          </div>
          {/* End Logo */}

          <nav className="header-nav ms-auto">
            <ul className="flex items-center">
              <li className=" block lg:hidden">
                <a
 className="inline-block py-2 px-4 no-underline nav-icon search-bar-toggle "
                  href="#"
                >
                  <i className="bi bi-search" />
                </a>
              </li>
              {/* End Search Icon*/}
              <Link
                to="/post-question"
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded mr-8 px-3 leading-normal no-underline bg-pink-500 text-white hover:bg-blue-700"
              > 
                Post Question
              </Link>
              <button  onClick={handleLogout} className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded mr-8 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700">
                Log Out
              </button>
            </ul>
          </nav> 
          {/* End Icons Navigation */}
        </header>
{/* End Header */}
        <main id="main" className="main">
          <div className="pagetitle">
             <nav>
              <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mt-4 mb-4 bg-white-300 rounded ">
                <li className="inline-block px-2 py-2 text-gray-700 ">
                  <a href="index.html">
                    <b>Home</b>
                  </a>
                </li>
                <li className="inline-block px-2 py-2 text-gray-700 active">
                  <b>Dashboard</b>
                </li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <section className="section dashboard">
            <div className="flex flex-wrap ">
              {/* Left side columns */}
              <div className="lg:w-full pr-4 pl-4 h-[65vh]">
                <div className="flex flex-nowrap">
 {/* Categories Card */}
                  <div className="lg:w-1/3 pr-4 pl-4 ">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-purple-100  border-3 border-black-900 info-card sales-card">
                      <div className="flex-auto p-3 h-[65vh]">
                        <h5 className="font-semibold mb-3 text-2xl p-5">Categories</h5>
                        <div className="flex items-center">
                          <span>
                        <div className="vertical-buttons ">
                              {['react', 'angular', 'javascript', 'bootstrap', 'html', 'css', 'python', 'jdbc', 'devops'].map(category => (
                                <button
                                  key={category}
                                  className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-violet-600  text-white hover:bg-violet-400"
                                  onClick={() => handleCategoryClick(category)}
                                >
                                  {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                              ))}
                            
                              
                              {/*
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                Angular
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                Javascript
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                BootStrap
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                HTML
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                CSS
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-norrmal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                Python
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                JDBC
                              </button>
                              <button onClick={() => navigate(`/questions/${category}`)} className="m-1 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                Devops
  </button> */}
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
{/* End Categories Card */}
          {/* Questions Card */}
          <div className="lg:w-3/4 pr-8 pl-4 h-[65vh]">
            <div className="relative flex flex-col h-[100%] min-w-0 rounded break-words border bg-purple-100 border-1 border-black-300 info-card revenue-card">
              <div className="flex-auto p-6 ">
                <h5 className="font-semibold mb-3 text-2xl">Questions </h5>
                <div className="flex items-center">
                <ul>
  {questions.map((question) => (
    <li key={question.id}>
      {question.name}{' '}
      <Link to={`/submit-answer/${question.questionId}`}>
        <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
          Answer
        </button>
      </Link>
    </li>
  ))}
</ul>

                </div>
              </div>
            </div>
          </div>
          {/* End Questions Card */}
                </div>
              </div>
              {/* End Left side columns */}
{/* Right side columns */}

                </div>
              
            
            {/* End Recent Activity */}
            {/* End Right side columns */}
          </section>
        </main>
{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="bg-violet-900 text-white footer flex justify-center align-middle w-[99vw]">
          <div className="copyright justify-center align-middle m-6">
            © Copyright{" "}
            <strong>
              <span>Tech Query</span>
            </strong>
            . All Rights Reserved
          </div>
        </footer>
        {/* End Footer */}
        <a href="#" className="back-to-top flex items-center justify-center">
          <i className="bi bi-arrow-up-short" />
        </a>
        {/* Vendor JS Files */}
      </div>
      </>
  );
};

export default Dashboard;