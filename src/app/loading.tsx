import React from 'react';
import './styles/loading.scss';

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
}
