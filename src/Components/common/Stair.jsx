import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'


const Stair = () => {
    const currentPath=useLocation().pathname;
     useGSAP(function(){
  const tl = gsap.timeline()
  tl.from('.stair', {
    height: 0,
    stagger: { amount: -0.3 }
  })
  tl.to('.stair', {
    y: '100%',
    stagger: { amount: -0.3 },
    onComplete: () => {
      gsap.set('.stair', { pointerEvents: 'none' })
    }
  })
},[currentPath])
  return (
     <div className='h-screen w-full flex fixed z-20 top-0 pointer-events-none'>
  <div className='stair h-full w-1/5 bg-black'></div>
  <div className='stair h-full w-1/5  bg-black'></div>
  <div className='stair h-full w-1/5  bg-black'></div>
  <div className='stair h-full w-1/5 bg-black'></div>
  <div className='stair h-full w-1/5  bg-black'></div>
</div>
  )
}

export default Stair