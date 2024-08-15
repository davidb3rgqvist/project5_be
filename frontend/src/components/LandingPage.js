import React from 'react';

function LandingPage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to HealthHub</h1>
      <p>Discover the best workouts and enjoy your fitness journey.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
  },
};

export default LandingPage;
