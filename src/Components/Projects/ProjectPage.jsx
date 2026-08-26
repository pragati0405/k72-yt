import React from 'react'
import ProjectPageImage from './ProjectPageImage'
import Footer from './Footer';
import AgenceNavbar from '../common/PageNavbar'

const ProjectPage = () => {
  const project=[
    {Image1:'public/screenshot-2021-04-06.jpg',
  Image2:'/BEST_site_Thumbnail.jpg'
},
{Image1:'/CF_thumbnail.jpg',
  Image2:'/crisis24_behance_1920X1200_cartes.jpg'
},
{Image1:'/featuredimage_opto.jpg',
  Image2:'/OKA_thumbnail.jpg'
},
{Image1:'/PJC_SiteK72_Thumbnail_1200x1920.jpg',
  Image2:'/PME-MTL_Thumbnail.jpg'
},
{Image1:'/thumbnailimage_OSM.jpg',
  Image2:'/thumbnailimage_shelton.jpg'
},
{Image1:'/thumbnailimage_SollioAg.jpg',
  Image2:'/MOD_K72_20211104_CS_Divan_419.jpg'
},
{Image1:'/PME-MTL_mosaic_4images.jpg',
  Image2:'/PME-MTL_Thumbnail.jpg'
}
  ];


  

  return (
    <div className='relative  '>
       <AgenceNavbar/>
       <div className='  h-[92vw]
       md:h-[35vw]'> 
         <div className='top-[60vw] absolute uppercase font-semibold text-[18vw] 
        md:top-[14vw]  md:text-[15vw]
        '>
            <h1 >projects
            <sup className='font-light '>17</sup>
            </h1>
         </div>
         </div>


          {project.map(function(elem){
            return<ProjectPageImage Image1={elem.Image1} Image2={elem.Image2}/> 
            
            
          })}
           

           <Footer/>
    </div>
  )
}

export default ProjectPage