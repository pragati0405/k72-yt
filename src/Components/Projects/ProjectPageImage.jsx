import React from 'react'

const ProjectPageImage = () => {
  return (
    <div className='h-screen w-full  '>
        <div className='w-full p-1.5  h-[130vw]  justify-evenly flex   flex-col md:flex-row gap-1.5
        md:h-[32vw] md:pt-2'>
                     {/* image 1 */}
                    <div className='w-full relative group transition-all  h-[65vw]
                    md:w-1/2 md:h-[30vw] 
                    hover:rounded-4xl overflow-hidden '>

                        <img className='h-full w-full object-cover'
                        src="/PJC_SiteK72_Thumbnail_1200x1920.jpg" alt=''/>

                        <div className='opacity-0 group-hover:opacity-100 h-full w-full top-0 left-0   absolute text-white   text-3xl  flex justify-center items-center
                          md:text-6xl'>
                            <h1 className='border  uppercase font-bold rounded-3xl p-1'> view project</h1>
                        </div>
                    </div>

                    {/* image 2 */}
                   
                      <div className='w-full relative group transition-all  h-[65vw]
                    md:w-1/2 md:h-[30vw] 
                    hover:rounded-4xl overflow-hidden '>

                        <img className='h-full w-full object-cover'
                        src="/PJC_SiteK72_Thumbnail_1200x1920.jpg" alt=''/>

                        <div className='opacity-0 group-hover:opacity-100 h-full w-full top-0 left-0   absolute text-white   text-3xl  flex justify-center items-center
                          md:text-6xl'>
                            <h1 className='border  uppercase font-bold rounded-3xl p-1'> view project</h1>
                        </div>
                    </div>
                       
 
        </div>
        
        
        
     </div>
  )
}

export default ProjectPageImage