import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  // Handle logout by clearing the auth cookie and updating state
  const handleLogout = () => {
    document.cookie = 'my-app-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsAuthenticated(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Logo link to home or workouts depending on auth status */}
        <Link to={isAuthenticated ? "/workouts" : "/"}>
          <img src={logo} alt="MyApp Logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.links}>
        {isAuthenticated ? (
          <>
            <Link to="/create-workout" className={styles.link}>Create Workout</Link>
            <a href="/" onClick={handleLogout} className={styles.link}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.link}>Login</Link>
            <Link to="/register" className={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
