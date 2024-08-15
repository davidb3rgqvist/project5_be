import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import styles from './WorkoutPage.module.css';

function WorkoutPage() {
  return (
    <div className={styles.workoutPage}>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}

export default WorkoutPage;
