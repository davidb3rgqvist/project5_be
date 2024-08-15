import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkoutFeed.css';

function WorkoutFeed() {
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/workouts/?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setWorkouts(data.results);
        setTotalPages(data.total_pages);
      });
  }, [currentPage]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Workouts</h2>
      <div className="row">
        {workouts.map(workout => (
          <div className="col-md-6 col-lg-4 mb-4" key={workout.id}>
            <WorkoutCard workout={workout} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2">Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WorkoutFeed;
