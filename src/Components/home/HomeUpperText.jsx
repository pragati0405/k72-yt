import React from 'react'
import Vedio from  './vedio'
const HomeUpperText = () => {
  return (
    <div className='uppercase text-white text-[9.5vw] font-semibold  flex flex-col justify-center items-center  leading-[0.8] m-2.5 '>
      <span>The spark for</span>
      <span className='flex items-center'>all
        <div className='  h-[7vw] w-[16vw] rounded-full overflow-hidden'><Vedio/></div>
         things</span>
      <span>creative</span>
    </div>
  )
}

export default HomeUpperText