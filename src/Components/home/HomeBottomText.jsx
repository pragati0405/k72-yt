 import React from "react";
import { Link } from "react-router-dom";
 
const HomeBottomText = () => {
  return (
    <div
      className="
        uppercase text-white font-semibold
        flex flex-col
        justify-center items-center
        gap-3
        text-[9vw]
        mt-[-2vh]
        
        md:flex-row
        md:text-[7vw]
        md:mt-0
        md:gap-4
      "
    >
      <Link
        to="/projects"
        className="
          border-4 border-white
          rounded-full
          leading-none
          px-5 py-2
          transition-colors duration-300
          hover:border-amber-300
          hover:text-amber-300
        "
      >
        projects
      </Link>

      <Link
        to="/agence"
        className="
          border-4 border-white
          rounded-full
          leading-none
          px-5 py-2
          transition-colors duration-300
          hover:border-amber-300
          hover:text-amber-300
        "
      >
        agency
      </Link>
    </div>
  );
};

export default HomeBottomText;

 