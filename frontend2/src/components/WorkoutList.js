// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Workouts = () => {
//     const [workouts, setWorkouts] = useState([]);

//     useEffect(() => {
//         // Fetch workouts from the Django backend
//         axios.get('http://localhost:8000/api/workouts/')
//             .then(response => {
//                 setWorkouts(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the workouts!", error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Workouts</h1>
//             <ul>
//                 {workouts.map(workout => (
//                     <li key={workout.id}>{workout.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Workouts;
