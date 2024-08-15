import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkoutDetail.css';

function WorkoutDetail({ currentUser }) {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/workouts/${id}/`)
      .then(response => response.json())
      .then(data => setWorkout(data));
    
    fetch(`/api/workouts/${id}/comments/`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [id]);

  const handleEdit = () => {
    navigate(`/workout/${id}/edit`);
  };

  const handleDelete = () => {
    fetch(`/api/workouts/${id}/`, { method: 'DELETE' })
      .then(() => navigate('/workouts'));
  };

  if (!workout) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <img src={workout.photo} alt={workout.title} className="img-fluid mb-4" />
      <h2>{workout.title}</h2>
      <p>{workout.description}</p>
      <div className="mb-4">
        <span>{workout.num_likes} Likes</span> | <span>{workout.num_followers} Followers</span>
      </div>
      {currentUser && currentUser.id === workout.user_id && (
        <div className="mb-4">
          <button className="btn btn-warning me-2" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      )}
      <h4>Comments</h4>
      <ul className="list-group">
        {comments.map(comment => (
          <li className="list-group-item" key={comment.id}>
            <strong>{comment.user.username}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDetail;
