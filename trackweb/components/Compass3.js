// components/Compass.js
import React from 'react';

const Compass = ({ heading }) => {
  return (
    <div className="compass w-32 h-32 relative">
      <div className="gradient-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="compass-needle bg-red-500 h-36 w-2 absolute left-1/2 transform -translate-x-1/2 rotate-[0.25turn] transition-transform duration-500 ease-in-out"
          style={{ transform: `rotate(${heading}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export default Compass;
