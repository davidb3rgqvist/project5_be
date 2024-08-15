import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutPage from './components/WorkoutPage';
import Login from './components/Login';
import Register from './components/Register';
import CreateWorkout from './components/CreateWorkout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <WorkoutPage /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-workout" element={<CreateWorkout />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
