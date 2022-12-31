import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
// Landing pages
import LandingPage from './Pages/LangingPage/LandingPage.jsx'
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
// Auth pages
import SignUp from './Pages/AuthPages/SignUp.jsx';
import SignIn from './Pages/AuthPages/SignIn.jsx';
import ForgotPassWord from './Pages/AuthPages/ForgotPassWord.jsx';
import ResetPassword from './Pages/AuthPages/ResetPassword.jsx';
// Patient Dashboard pages 
import PatientDashboard from './Pages/PatientDashboard/PatientDashboard.jsx';
import PatientProfile from './Pages/PatientDashboard/PatientProfile/PatientProfile.jsx';
// Doctor DashBoard
import DoctorDashboard from './Pages/DoctorDashboard/DoctorDashboard.jsx';
import DoctorProfile from './Pages/DoctorDashboard/DoctorProfile/DoctorProfile.jsx';
// Admin Dashboard
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard.jsx';
// Navlinks from routes
import { ABOUT, ADMIN, CONTACT, DASHBOARD, DOCTOR, DOCTORPROFILE, FORGOTPASSWORD, HOME, PATIENTDETAILS, PATIENTPROFILE, RESETPASSWORD, SIGNIN, SIGNUP } from './routes.js';
import PatientDetails from './Pages/AdminDashboard/Patients/PatientDetails.jsx';


function App() {

  return (
    <div className="App">
      <Routes>
        {/* landing pages */}
        <Route path={HOME} element={<LandingPage />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={CONTACT} element={<Contact />} />

        {/* Auth Paths */}
        <Route path={SIGNUP} element={<SignUp />} />
        <Route path={SIGNIN} element={<SignIn />} />
        <Route path={FORGOTPASSWORD} element={<ForgotPassWord />} />
        <Route path={RESETPASSWORD} element={<ResetPassword />} />

        {/* Patient Dashboard */}
        <Route path={DASHBOARD} element={<PatientDashboard />} />
        <Route path={PATIENTPROFILE} element={<PatientProfile />} />

        {/* Doctor Patient */}
        <Route path={DOCTOR} element={<DoctorDashboard />} />
        <Route path={DOCTORPROFILE} element={<DoctorProfile />} />

        {/* Admin Dashboard */}
        <Route path={ADMIN} element={<AdminDashboard />} />
        <Route path={PATIENTDETAILS} element={<PatientDetails />} />

      </Routes>
    </div>
  );
}

export default App;
