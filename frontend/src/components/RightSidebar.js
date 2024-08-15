import React from 'react';
import styles from './RightSidebar.module.css';

function RightSidebar() {
  return (
    <div className={styles.rightSidebar}>
      <h3>Followed Workout Programs</h3>
      <ul className={styles.followedPlans}>
        <li><a href="#plan1">Program: Title</a></li>
        <li><a href="#plan2">Program: Title</a></li>
        <li><a href="#plan3">Program: Title</a></li>
      </ul>
    </div>
  );
}

export default RightSidebar;
