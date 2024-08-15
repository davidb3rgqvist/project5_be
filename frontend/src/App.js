import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutPage from './components/WorkoutPage';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated by looking for a token in localStorage
    const token = localStorage.getItem('my-app-auth');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {/* Navbar is always rendered and passes down authentication state */}
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* Public and protected routes */}
        <Route path="/" element={<LandingPage />} />
        {/* Redirect to login if not authenticated */}
        <Route path="/workouts" element={isAuthenticated ? <WorkoutPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        {/* Redirect any unknown route to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
