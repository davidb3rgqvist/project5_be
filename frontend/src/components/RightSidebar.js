import React from 'react';
import styles from './RightSidebar.module.css';

function RightSidebar() {
  return (
    <div className={styles.rightSidebar}>
      <h3>Followed Workout Plans</h3>
      <ul className={styles.followedPlans}>
        <li><a href="#plan1">Plan 1</a></li>
        <li><a href="#plan2">Plan 2</a></li>
        <li><a href="#plan3">Plan 3</a></li>
      </ul>
    </div>
  );
}

export default RightSidebar;
