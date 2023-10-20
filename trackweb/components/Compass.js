// components/Compass.js
import React from 'react';
import {HiArrowNarrowUp} from 'react-icons/hi'

const Compass = ({ heading}) => {
  return (
    <div className="compass flex items-center justify-center ">
      <div className="">
        <div
          className="compass-needle transition-transform duration-500 ease-in-out"
          style={{ transform: `rotate(${heading}deg)` }}
        >
          <HiArrowNarrowUp size={100}/>
        </div>
      </div>
    </div>
  );
};

export default Compass;
