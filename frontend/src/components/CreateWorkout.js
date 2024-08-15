import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateWorkout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateWorkout() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [exercises, setExercises] = useState('');
  const [routine, setRoutine] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('exercises', exercises);
    formData.append('routine', routine);
    formData.append('is_public', isPublic);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const response = await fetch('/api/workouts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${document.cookie.split('my-app-auth=')[1]}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Workout creation failed');
      }

      alert('Workout created successfully');
      navigate('/workouts');

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.createWorkoutContainer}>
      <h2>Create Workout Program</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exercises">Exercises</label>
          <textarea
            className="form-control"
            id="exercises"
            rows="3"
            value={exercises}
            onChange={(e) => setExercises(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="routine">Routine</label>
          <textarea
            className="form-control"
            id="routine"
            rows="3"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="isPublic">Public</label>
          <input
            type="checkbox"
            className="form-control"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            className="form-control"
            id="photo"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Workout</button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>
    </div>
  );
}

export default CreateWorkout;
