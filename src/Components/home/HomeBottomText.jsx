import React from 'react'
import { Link } from "react-router-dom";
const HomeBottomText = () => {
  return (
       <div className="uppercase text-white text-[7vw] font-semibold flex gap-4 justify-center items-center">

  <Link
    to="/Projects"
    className="border-4 rounded-full leading-[7vw] px-5" >
     projects
  </Link>

  <Link
    to="/Agence"
    className="border-4 rounded-full leading-[7vw] px-5" >
    agency
  </Link>


</div>
  )
}

export default HomeBottomText