import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkoutCard.css';

function WorkoutCard({ workout }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/workout/${workout.id}`);
  };

  return (
    <div className="card workout-card" onClick={handleCardClick}>
      <img src={workout.photo} alt={workout.title} className="card-img-top workout-image" />
      <div className="card-body">
        <h5 className="card-title">{workout.title}</h5>
        <p className="card-text">
          {workout.description.length > 100 ? `${workout.description.substring(0, 100)}...` : workout.description}
        </p>
        <div className="card-meta">
          <span>{workout.num_likes} Likes</span> | <span>{workout.num_followers} Followers</span>
        </div>
        <button className="btn btn-link p-0">Read More</button>
      </div>
    </div>
  );
}

export default WorkoutCard;
