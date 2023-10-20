import React from "react";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaRegUser} from "react-icons/fa";
export default function Navbar () {
    return(
        <div className='h-fit w-screen flex items-center justify-between pt-14 px-24 text-center text-4xl text-[#d9d9d9]'>
        <Link href='/' className='transition transform ease-in-out duration-150 hover:scale-125'>
        <HiArrowNarrowLeft size={70} color='#d9d9d9'/>
        </Link>
      Compass Page
      <Link href='/' className=''>
      <FaRegUser size={40} color='#d9d9d9'/>
      </Link>
    </div>
    )
}