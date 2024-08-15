import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutFeed from './components/WorkoutFeed';
import WorkoutDetail from './components/WorkoutDetail';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser] = useState(null);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workouts" element={isAuthenticated ? <WorkoutFeed /> : <Navigate to="/" />} />
        <Route path="/workout/:id" element={isAuthenticated ? <WorkoutDetail currentUser={currentUser} /> : <Navigate to="/" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
