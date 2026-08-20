import React from 'react'
import ProjectPageImage from './ProjectPageImage'

const ProjectPage = () => {
  return (
    <div className='relative '>
       <div className='  h-[92vw]
       md:h-[35vw]'> 
         <div className='top-[70vw] absolute uppercase font-semibold text-[18vw] 
        md:top-[16vw]  md:text-[15vw]'>
            <h1 >projects
            <sup className='font-light '>17</sup>
            </h1>
         </div>
         </div>
         <ProjectPageImage/>
    </div>
  )
}

export default ProjectPage