import React from 'react'
import Vedio from  './Vedio'
const HomeUpperText = () => {
  return (
    <div className="
  uppercase text-white font-semibold
  flex flex-col justify-center items-center
  leading-[0.85]

  text-[13vw]
  mt-[20vh]
  gap-1

  md:text-[9.5vw]
  md:mt-0
  md:gap-0
">
  
  <span>The spark for</span>

  <span className="flex items-center gap-2">
    all

    <div className="
      h-[10vw] w-[24vw]
      rounded-full overflow-hidden
      md:h-[7vw] md:w-[16vw]
    ">
      <Vedio />
    </div>

    things
  </span>

  <span>creative</span>

</div>
  )
}

export default HomeUpperText