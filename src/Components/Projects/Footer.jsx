import React from 'react'

 const Footer = () => {
  return (
    <footer className="h-[100vw] bg-gradient-to-b from-black via-zinc-900 to-zinc-700 relative overflow-hidden md:h-[25vw]">

      {/* TOP */}
      <div className="flex flex-col gap-3 p-1.5 md:flex-row md:justify-between md:items-start">

        {/* SOCIAL */}
        <div className="flex gap-1 flex-wrap">
          <span className="border-2 border-white rounded-full px-4 py-2 text-[9vw] leading-[0.7] transition-colors duration-300 hover:border-amber-200 hover:text-amber-200 md:text-[4vw] md:px-5 md:py-3">
            FB
          </span>

          <span className="border-2 border-white rounded-full px-4 py-2 text-[9vw] leading-[0.7] transition-colors duration-300 hover:border-amber-200 hover:text-amber-200 md:text-[4vw] md:px-5 md:py-3">
            IG
          </span>

          <span className="border-2 border-white rounded-full px-4 py-2 text-[9vw] leading-[0.7] transition-colors duration-300 hover:border-amber-200 hover:text-amber-200 md:text-[4vw] md:px-5 md:py-3">
            IN
          </span>

          <span className="border-2 border-white rounded-full px-4 py-2 text-[9vw] leading-[0.7] transition-colors duration-300 hover:border-amber-200 hover:text-amber-200 md:text-[4vw] md:px-5 md:py-3">
            BE
          </span>
        </div>

        {/* CONTACT */}
        <div className="border-2 border-white rounded-full px-5 py-2 text-[9vw] leading-[0.7] w-fit transition-colors duration-300 hover:border-amber-200 hover:text-amber-200 md:text-[4vw] md:px-8 md:py-3">
          CONTACT ♥
        </div>

      </div>


      {/* BOTTOM */}
      <div className="
        absolute bottom-2 left-0 w-full px-2
        flex flex-col gap-3
        text-[3vw]
         
        md:flex-row
        md:items-end
        md:justify-between
        md:text-[1vw]
        md:gap-0

      ">

        

        {/* LINKS */}
        <div className="flex flex-col  font-bold gap-2 md:flex-row md:gap-8">
          <span className="hover:text-amber-200 transition-colors duration-300">
            PRIVACY POLICY
          </span>

          <span className="hover:text-amber-200 transition-colors duration-300">
            PRIVACY NOTICE
          </span>

          <span className="hover:text-amber-200 transition-colors duration-300">
            ETHICS REPORT
          </span>

          <span className="hover:text-amber-200 transition-colors duration-300">
            CONSENT CHOICES
          </span>
        </div>

        {/* BACK */}
        <div className="hover:text-amber-200 transition-colors duration-300">
          BACK TO ↑
        </div>

      </div>

    </footer>
  );
};

 
export default Footer;