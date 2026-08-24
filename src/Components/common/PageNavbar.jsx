import React from 'react'
import { Link } from "react-router-dom";
const AgenceNavbar = () => {
  return (
    
 <div className='absolute top-0 left-0 w-full z-50 bg-transparent'>
    <div className='flex capitalize absolute right-0 text-black font-bold text-[3vw] md:text-2xl'> 
        
        {/* Box 1: projects(17) */}
        {/* div ki jagah <Link> lagaya hai aur 'to' attribute diya hai */}
        <Link to="/projects" className='group relative overflow-hidden bg-white w-[20vw] justify-start flex pl-2 pb-1 items-end h-[8vw] md:w-[20vw] md:h-[3.5vw] md:pl-2 md:pb-2 cursor-pointer no-underline text-black'>
            <div className='absolute top-0 left-0 w-full h-0 bg-lime-300 transition-all duration-300 ease-in-out group-hover:h-full'></div>
            <span className='relative z-10'>projects(17)</span>
        </Link>

        {/* Box 2: Agency */}
        <Link to="/agence" className='group relative overflow-hidden bg-white w-[20vw] justify-start flex pl-2 pb-1 items-end h-[10vw] md:w-[20vw] md:h-[5.5vw] md:p-2 cursor-pointer no-underline text-black'>
            <div className='absolute top-0 left-0 w-full h-0 bg-lime-300 transition-all duration-300 ease-in-out group-hover:h-full'></div>
            <span className='relative z-10'>Agency</span>
        </Link>
        
        {/* Box 3: menu */}
        <Link to="/" className='group relative overflow-hidden bg-white w-[20vw] justify-start flex pl-2 pb-1 items-end h-[12vw] md:w-[20vw] md:h-[7.5vw] md:p-2 cursor-pointer no-underline text-black'>
            <div className='absolute top-0 left-0 w-full h-0 bg-lime-300 transition-all duration-300 ease-in-out group-hover:h-full'></div>
            <span className='relative z-10'>menu</span>
        </Link>

    </div>
</div>
  )
}

export default AgenceNavbar