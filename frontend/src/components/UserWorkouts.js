import React, { useState, useEffect } from 'react';

function UserWorkouts() {
    const [workouts, setWorkouts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch workouts');
                }

                const data = await response.json();
                setWorkouts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWorkouts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Your Workouts</h2>
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        <h3>{workout.title}</h3>
                        <p>{workout.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserWorkouts;
