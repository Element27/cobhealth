import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';

// pages 
import LandingPage from './Pages/LangingPage/LandingPage.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
