// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import PostQuestion from './pages/PostQuestion';
import CategoryQuestions from './pages/CategoryQuestions';
import { Navigate } from 'react-router-dom';
import Login from './auth/Login';
import SubmitAnswer from './pages/SubmitAnswer';

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
      <Route
        path="/questions/*"
        element={isAuthenticated ? <CategoryQuestions /> : <Navigate to="/login" />}
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
    </Routes>
  );
}

export default AppRoutes;
