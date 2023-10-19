// pages/CompassPage.js
import React, { useState, useEffect } from 'react';
import Compass from '../../components/Compass';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import {FaRegUser} from 'react-icons/fa'


const CompassPage = () => {
  const [compassHeading, setCompassHeading] = useState(0);

  // Simulate data from a GPS module (replace with actual implementation)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeading = Math.random() * 360;
      setCompassHeading(randomHeading);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f]">
      <div className='items-center justify-around pt-10'>
        <div className='pt-14'>
          <HiArrowNarrowLeft size={75} color='#d9d9'/>
        </div>
      <h1 className='text-center text-white text-4xl'>
        Compass Page
      </h1>
      <div>
        <FaRegUser size={75}/>
      </div>
      </div>
      <div className='py-60 flex items-center justify-center'>
      <div className='justify-center items-center h-96 w-96 rounded-full bg-gradient-to-b from-[#ffffff11] to-[#d9d9d902] to-30% transition-transform duration-500 ease-in-out'style={{ transform: `rotate(${compassHeading}deg)` }}>
          <div className=' rounded-full pl-28 py-32'>
          <HiArrowNarrowUp size={150} color='#D9D9D9e3'/>
          </div>
      </div>
      </div>
    </main>
  );
};

export default CompassPage;