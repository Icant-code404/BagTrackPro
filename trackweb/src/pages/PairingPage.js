import { Main } from "next/document";
import React from "react";
import {MdOutlineWifiTethering} from 'react-icons/md'
import Navbar from "../../components/Navbar";


function PairingPage () {
    return(
     <main className="h-screen w-screen bg-gradient-to-b from-[#102b44] from-40% to-[#102b448f]">
      <Navbar/>
     </main>
    );
}

export default PairingPage