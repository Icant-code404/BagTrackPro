// pages/CompassPage.js
import React, { useState, useEffect } from 'react';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { CalcDistance } from '../../utils/CalcDistance';
import Navbar from '../../components/Navbar';


const CompassPage = () => {
  const [compassHeading, setCompassHeading, setDistance] = useState(0);
  const [location1, setLocation1] = useState({ latitude: 40.7128, longitude: -74.0060 }); 
  const [location2, setLocation2] = useState({ latitude: 34.0522, longitude: -118.2437 });

  const distance = CalcDistance(location1.latitude, location1.longitude, location2.latitude, location2.longitude);

  // Simulate data from a GPS module (replace with actual implementation)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeading = Math.random() * 360;
      setCompassHeading(randomHeading);
      const randomDistance = Math.random() * 200;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f]">
    <Navbar/>
      <div className='py-60 flex items-center justify-center '>
      <div className='justify-center items-center h-96 w-96 rounded-full bg-gradient-to-b from-[#ffffff11] to-[#d9d9d902] to-30% transition-transform duration-500 ease-in-out'style={{ transform: `rotate(${compassHeading}deg)` }}>
          <div className=' rounded-full pl-28 py-32'>
          <HiArrowNarrowUp size={150} color='#D9D9D9e3'/>
          </div>
      </div>
      <div className='text-2xl text-white'>
        {distance}m
      </div>
      </div>
    </main>
  );
};

export default CompassPage;