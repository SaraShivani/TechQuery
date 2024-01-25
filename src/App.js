import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/Homepage' element={<Homepage />} />
        
      </Routes>
      </Router>
    </div>
  )
}


export default App;
