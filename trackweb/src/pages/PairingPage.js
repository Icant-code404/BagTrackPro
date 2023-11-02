import { Main } from "next/document";
import React from "react";
import {MdOutlineWifiTethering} from 'react-icons/md'
import Navbar from "../../components/Navbar";


function PairingPage () {
    return(
     <main className="h-screen w-screen bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f]">
      <Navbar/>
      <div className="flex items-center justify-center pt-5 pb-5">
        <MdOutlineWifiTethering size={200} color="#d9d9d9e3" opacity={30}/>
      </div>
      <div className="bg-[#d9d9d9d7] rounded-t-3xl h-96 w-screen opacity-50 text-gray-700 text-3xl pl-10 pt-8">
       Available Devices:
      </div>
     </main>
    );
}

export default PairingPage