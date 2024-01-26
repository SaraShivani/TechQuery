// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import PostQuestion from './pages/PostQuestion';
import { Navigate } from 'react-router-dom';
import Login from './auth/Login';
import SubmitAnswer from './pages/SubmitAnswer';
import QuestionDetails from './pages/QuestionDetails';
import TotalAnswers from './pages/TotalAnswers';

// Import CategoryQuestions at the top
import CategoryQuestions from './pages/CategoryQuestions';

function AppRoutes({ questions, onQuestionSubmit, onAnswerSubmit, isAuthenticated, setAuthenticated }) {
  return (
    <Routes>
	
      <Route
        path="/"
        element={isAuthenticated ? <Dashboard questions={questions} /> : <Navigate to="/login" />}
      />
      <Route
        path="/post-question"
        element={isAuthenticated ? <PostQuestion onQuestionSubmit={onQuestionSubmit} /> : <Navigate to="/login" />}
      />
      {/* Update the path to "/questions" */}
      <Route
        path="/questions"
        element={isAuthenticated ? <Dashboard questions={questions} /> : <Navigate to="/login" />}
      />


      <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
      <Route
        path="/submit-answer/:questionId"
        element={isAuthenticated ? (
          <SubmitAnswer
            onAnswerSubmit={onAnswerSubmit}
          />
        ) : (
          <Navigate to="/login" />
        )}
      />
<Route path="/question-details/:questionId" element={<QuestionDetails />} />
<Route path="/total-answers/:questionId" element={<TotalAnswers />} />
      {/* Remove the "/questions/:category" route */}
    </Routes>
  );
}

export default AppRoutes;
