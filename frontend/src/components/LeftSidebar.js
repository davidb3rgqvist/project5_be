import React from 'react';
import styles from './LeftSidebar.module.css';
import profilePic from '../assets/profile-pic.jpg';

function LeftSidebar() {
  return (
    <div className={styles.leftSidebar}>
      <img src={profilePic} alt="Profile" className={styles.profileImage} />
      <h2 className={styles.userName}>John Doe</h2>
      <p className={styles.userDescription}>Fitness Enthusiast. Sharing workout plans for everyone.</p>
      <button className="btn btn-primary">Edit Profile</button>
      <button className="btn btn-danger mt-2">Delete Profile</button>
    </div>
  );
}

export default LeftSidebar;
