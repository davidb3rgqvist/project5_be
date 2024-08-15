import React from 'react';
import styles from './WorkoutCard.module.css';

function WorkoutCard({ workout }) {
  return (
    <div className={styles.workoutCard}>
      <img src={workout.photo} alt={workout.title} className={styles.workoutImage} />
      <h2 className={styles.workoutTitle}>{workout.title}</h2>
      <p className={styles.workoutDescription}>{workout.description.substring(0, 100)}...</p>
      <a href={`/workout/${workout.id}`} className={styles.readMore}>Read more</a>
    </div>
  );
}

export default WorkoutCard;
