import React from "react";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaRegUser} from "react-icons/fa";
export default function Navbar () {
    return(
        <div className=" text-3xl h-fit w-screen flex items-center justify-between pt-14 px-24 pb-10 bg-[#ffffff09] rounded-b-xl shadow-md">
        <Link href='/' className='transition transform ease-in-out duration-150 hover:scale-125'>
        <HiArrowNarrowLeft size={50} color='#d9d9d9'/>
        </Link>
     <h1 className="text-5xl text-[#d9d9d9] font-Yeseva One pr-10" > BagTrackPro</h1>
      <Link href="/UserPage">
      <FaRegUser size={40} color='#d9d9d9'/>
      </Link>
    </div>
    )
}