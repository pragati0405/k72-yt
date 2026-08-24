import React from 'react'
import Vedio from '../Components/home/Vedio'
import HomeUpperText from '../Components/home/HomeUpperText'
import HomeLowerText from '../Components/home/HomeBottomText'
import HomeMiddleText from '../Components/home/HomeMiddleText'
const Home = () => {
  return (
    <div>
       <div className='h-screen w-screen fixed  '>
      <Vedio/>
    </div>
   <div className='h-screen w-screen overflow-hidden  flex flex-col relative justify-between'>
    <HomeUpperText/>
    <HomeMiddleText/>
    <HomeLowerText/>
   </div>
    </div>
  )
}

export default Home