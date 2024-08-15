import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LandingPage.module.css';
import landingBg from '../assets/landing-bg.jpg';
import createWorkoutImage from '../assets/create-workout.jpg';
import followPtImage from '../assets/follow-pt.jpg';
import trainAnywhereImage from '../assets/train-anywhere.jpg';

function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      {/* Hero section with background image and call to action */}
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url(${landingBg})` }}
      >
        <h1>Welcome to HealthHub</h1>
        <p>Your journey to fitness begins here.</p>
        <Link to="/register" className="btn btn-primary btn-lg">Register</Link>
      </div>
      
      {/* Benefits section highlighting key features of the platform */}
      <div className={styles.benefitsSection}>
        <div className="row">
          <div className="col-md-4">
            <img src={createWorkoutImage} alt="Become a Creator" className={styles.benefitImage} />
            <h3>Become a Creator</h3>
            <p>You can create personalized workout programs that others in the community can follow. Share your fitness journey by designing routines that suit different levels and goals, whether it's for strength training, cardio, or flexibility. Your programs can inspire and guide others to achieve their fitness aspirations, fostering a supportive and motivating environment for everyone involved.</p>
          </div>
          <div className="col-md-4">
            <img src={followPtImage} alt="Follow PTs" className={styles.benefitImage} />
            <h3>Follow PTs</h3>
            <p>Follow your favorite personal trainers and stay updated with their latest workout programs. Get inspired by their expertise, track their routines, and stay motivated on your fitness journey by connecting with the trainers who resonate with your goals.</p>
          </div>
          <div className="col-md-4">
            <img src={trainAnywhereImage} alt="Train from Anywhere" className={styles.benefitImage} />
            <h3>Train from Anywhere</h3>
            <p>Train from the gym or the comfort of your home—our platform offers flexible workout programs that fit your lifestyle. Whether you have access to full gym equipment or just a small space at home, you can find routines tailored to your environment, helping you stay consistent and achieve your fitness goals wherever you are.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
