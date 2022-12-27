import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import ForgotPassWord from './Pages/AuthPages/ForgotPassWord.jsx';
import ResetPassword from './Pages/AuthPages/ResetPassword.jsx';
import SignIn from './Pages/AuthPages/SignIn.jsx';
import SignUp from './Pages/AuthPages/SignUp.jsx';

// pages 
import LandingPage from './Pages/LangingPage/LandingPage.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Auth Paths */}
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="forgotpassword" element={<ForgotPassWord />} />
        <Route path='resetpassword' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
