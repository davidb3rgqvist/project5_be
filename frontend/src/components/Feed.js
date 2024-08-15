import React from 'react';
import styles from './Feed.module.css';

function Feed() {
  // Static list of workouts to be displayed in the feed
  const workouts = [
    { id: 1, title: 'Workout 1', description: 'Description 1', likes: 10 },
    { id: 2, title: 'Workout 2', description: 'Description 2', likes: 15 },
  ];

  return (
    <div className={styles.feed}>
      {workouts.map(workout => (
        <div key={workout.id} className={styles.workoutCard}>
          {/* Placeholder image for each workout */}
          <img src={`https://via.placeholder.com/600x200?text=${workout.title}`} alt={workout.title} className={styles.workoutImage} />
          <h3>{workout.title}</h3>
          <p>{workout.description}</p>
          <p><strong>{workout.likes}</strong> Likes</p>
          <a href={`/workout/${workout.id}`} className="btn btn-primary">Read More</a>
        </div>
      ))}
    </div>
  );
}

export default Feed;
