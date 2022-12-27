import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Pages/AuthPages/SignIn.jsx';
import SignUp from './Pages/AuthPages/SignUp.jsx';

// pages 
import LandingPage from './Pages/LangingPage/LandingPage.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
