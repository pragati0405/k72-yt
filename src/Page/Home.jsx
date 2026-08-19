import React from 'react'
import Vedio from '../Components/home/vedio'
import HomeUpperText from '../Components/home/HomeUpperText'
import HomeLowerText from '../Components/home/HomeBottomText'
const Home = () => {
  return (
    <div>
       <div className='h-screen w-screen fixed  '>
      <Vedio/>
    </div>
   <div className='h-screen w-screen   flex flex-col relative justify-between'>
    <HomeUpperText/>
    <HomeLowerText/>
   </div>
    </div>
  )
}

export default Home