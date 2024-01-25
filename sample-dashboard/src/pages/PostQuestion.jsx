import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostQuestion = ({ onQuestionSubmit }) => {
  const navigate = useNavigate();

  const [questionId, setQuestionId] = useState('');
  const [topic, setTopic] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');

  const handleReset = () => {
    setQuestionId('');
    setTopic('');
    setQuestionName('');
    setCodeSnippet('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = {
      questionId: questionId,
      name: questionName,
      topic: topic,
      codeSnippet: codeSnippet,
    };

    await onQuestionSubmit(newQuestion);
    alert('Question submitted successfully!');


    // Redirect or perform any additional actions
    navigate('/');
  };


  return (
<div>
      <div className="bg-white-100">
        {/* ======= Header ======= */}
        <header id="header" className="header top-0 flex items-center font-bold bg-violet-900 text-white">
          <div className="flex items-center justify-between p-5">
            <a href="#" className="logo flex items-center">
              <span className="hidden lg:block text-3xl">Tech Query | PostQuestion</span>
            </a>
          </div>
        </header>
        <main id="main" className="main">
          <div className="pagetitle">
            
            <nav>
              <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mt-4 mb-4 font-semibold bg-white-100 rounded">
                <li className="font-bold inline-block px-2 py-2 text-gray-700">
                  <a href="#">
                    <b>Home</b>
                  </a>
                </li>
                <li className="font-bold inline-block px-2 py-2 text-gray-700 active">
                  <a href="/">
                    <b>Dashboard</b>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <div className="lg:w-full pr-4 pl-4">
            <div className="relative flex flex-col h-[100%] min-w-0 rounded break-words border bg-purple-200 border-1 border-black-300 info-card revenue-card">
              <div className="flex-auto p-6 ">
                <h5 className="mb-3 text-2xl font-semibold">Post a Question</h5>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                  {/* Question ID */}
                  <div className="mb-4">
<label htmlFor="questionId" className="block text-gray-700 text-sm font-bold mb-2">
                      Question ID:
                    </label>
                    <input
                      type="text"
                      id="questionId"
                      name="questionId"
                      value={questionId}
                      onChange={(e) => setQuestionId(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Question ID"
                    />
                  </div>
                  {/* Topic */}
                  <div className="mb-4">
                    <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">
                      Topic:
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={topic}
 onChange={(e) => setTopic(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select Topic</option>
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="Bootstrap">Bootstrap</option>
                      <option value="JDBC">JDBC</option>
                      <option value="Python">Python</option>
                      <option value="Devops">Devops</option>
                      {/* Add more topics as needed */}
                    </select>
                  </div>
                  {/* Question Name */}
                  <div className="mb-4">
                    <label htmlFor="questionName" className="block text-gray-700 text-sm font-bold mb-2">
                      Question Name:
                    </label>
                    <textarea
                      id="questionName"
                      name="questionName"
                      value={questionName}
                      onChange={(e) => setQuestionName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Question Name"
                    />
                  </div>
                  {/* Code Snippet */}
                  <div className="mb-4">
                    <label htmlFor="codeSnippet" className="block text-gray-700 text-sm font-bold mb-2">
                      Code Snippet:
                    </label>
                    <textarea
                      id="codeSnippet"
name="codeSnippet"
                      value={codeSnippet}
                      onChange={(e) => setCodeSnippet(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Code Snippet"
                    />
                  </div>
                  {/* Submit and Reset Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-violet-900 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PostQuestion;


