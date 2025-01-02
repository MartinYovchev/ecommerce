import React from 'react';

export default function Loading() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#FF6F00', // Bright orange background
    color: 'black',
    fontFamily: 'Arial, sans-serif',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid black',
    borderTop: '5px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '15px',
    fontSize: '16px',
    fontWeight: '500',
  },
};
