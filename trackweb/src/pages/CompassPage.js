// pages/CompassPage.js
import React, { useState, useEffect } from 'react';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { CalcDistance } from '../../utils/CalcDistance';
import Navbar from '../../components/Navbar';


const CompassPage = () => {
  const [compassHeading, setCompassHeading, setDistance] = useState(0);
  const [UserCoord, setLocation1] = useState({ latitude: 19.0451770, longitude: 72.8197130 }); 
  const [ModuleCoord, setLocation2] = useState({ latitude: 19.051016, longitude: 72.828942 });

  const distance = CalcDistance(UserCoord.latitude, UserCoord.longitude, ModuleCoord.latitude, ModuleCoord.longitude);

  // Simulate data from a GPS module (replace with actual implementation)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeading = Math.random() * 360;
      setCompassHeading(randomHeading);
      const randomDistance = Math.random() * 200;
    },1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f] font-YesevaOne ">
    <Navbar/>
    <h1 className='text-center text-4xl text-[#d9d9d9] py-8'> User's Backpack</h1>
      <div className='pt-8 pb-20 flex items-center justify-center '>
      <div className='justify-center items-center h-96 w-96 rounded-full bg-gradient-to-b from-[#ffffff11] to-[#d9d9d902] to-30% transition-transform duration-500 ease-in-out'style={{ transform: `rotate(${compassHeading}deg)` }}>
          <div className=' rounded-full pl-28 py-32'>
          <HiArrowNarrowUp size={150} color='#D9D9D9e3'/>
          </div>
      </div>
      </div>
      <div className='text-center text-3xl text-[#d9d9d9f3] -my-32 pt-20'>
        {distance.toPrecision(2)}km
      </div>
    </main>
  );
};

export default CompassPage;