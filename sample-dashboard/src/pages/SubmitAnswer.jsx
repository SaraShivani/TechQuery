import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SubmitAnswer = () => {
  const { questionId } = useParams(); // Extracting questionId from route parameters
  const [explanation, setExplanation] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [attachment, setAttachment] = useState('');

  const handleReset = () => {
    setExplanation('');
    setCodeSnippet('');
    setAttachment('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAnswer = {
      explanation: explanation,
      codeSnippet: codeSnippet,
      attachment: attachment,
    };

    try {
      const response = await fetch(`http://localhost:8080/api/submit-answer/${questionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnswer),
      });

      if (!response.ok) {
        throw new Error('Failed to submit answer');
      }

      window.alert('Answer submitted successfully');
      // Perform any additional actions, such as redirecting or updating state
      handleReset();
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div>
      <div className="bg-white-900">
        <header id="header" className="font-bold text-white bg-violet-900 header top-0 flex items-center">
          <div className="flex items-center justify-between p-5">
            <a href="#" className="logo flex items-center">
              <span className="hidden lg:block text-3xl">Tech Query | Submit Answer</span>
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
          <div className="lg:w-full pr-4 pl-4">
            <div className="relative flex flex-col h-[100%] min-w-0 rounded break-words border bg-purple-200 border-1 border-black-300 info-card revenue-card">
              <div className="flex-auto p-6 ">
                <h5 className="mb-3 text-2xl">Submit an Answer</h5>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                  <div className="mb-4">
                    <label htmlFor="explanation" className="block text-gray-700 text-sm font-bold mb-2">
                      Explanation:
                    </label>
                    <textarea
                      id="explanation"
                      name="explanation"
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Explanation"
                    />
                  </div>
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
                  <div className="mb-4">
                    <label htmlFor="attachment" className="block text-gray-700 text-sm font-bold mb-2">
                      Attachment:
                    </label>
                    <input
                      type="text"
                      id="attachment"
                      name="attachment"
                      value={attachment}
                      onChange={(e) => setAttachment(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Attachment URL"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-purple-900 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="bg-purple-900 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default SubmitAnswer;
