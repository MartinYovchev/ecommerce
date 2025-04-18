import React from 'react';
import './styles/loading.scss';

export default function Loading({ isLoading }: { isLoading: boolean }) {
  return (
    <div className={`loading-overlay ${isLoading ? '' : 'hidden'}`}>
      <div className="loading-spinner"></div>
    </div>
  );
}
