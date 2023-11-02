import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import Maps from '../../components/Maps';
import Navbar from '../../components/Navbar';

const MapPage = () => {
  return (
    <main className='h-screen w-screen bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f]'>
      <Navbar/>
      <Maps/>
    </main>
  )
}

export default MapPage

