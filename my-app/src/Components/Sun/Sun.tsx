import React from 'react';
import './SunAnimation.css';

const Sun = () => {
  return (
    <div className="sun-container">
      <div className="sun"></div>
      <div className="ray-box">
        {[...Array(12)].map((e, i) => (
          <div key={i} className={`ray ray-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Sun;
