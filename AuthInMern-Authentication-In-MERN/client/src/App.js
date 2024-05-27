// App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Main from './components/Main';
import Signup from './components/Singup';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AboutUs from './components/AboutUs'; // Import the AboutUs component

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={user ? <Main /> : <Navigate replace to="/login" />} />
      <Route path="/dashboard" element={user ? <UserDashboard /> : <Navigate replace to="/login" />} />
      <Route path="/about" element={<AboutUs />} /> {/* New route for About Us page */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
