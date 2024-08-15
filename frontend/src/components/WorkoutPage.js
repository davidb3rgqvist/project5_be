import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import styles from './WorkoutPage.module.css';

function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch workouts from the API when the component mounts
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts/');
        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }
        const data = await response.json();
        setWorkouts(data.results);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className={styles.workoutPage}>
      <div className={styles.workoutFeed}>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default WorkoutPage;
