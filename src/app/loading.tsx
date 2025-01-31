import React from 'react';
import '@styles/loading.scss';

export default function Loading({ isLoading }: { isLoading: boolean }) {
  return (
    <div className={`loader-container ${isLoading ? "" : "hidden"}`}>
      <div className="loader"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}
