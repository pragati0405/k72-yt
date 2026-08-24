import React from 'react'
import ProjectPageImage from './ProjectPageImage'
import Footer from './Footer';
import AgenceNavbar from '../common/PageNavbar'

const ProjectPage = () => {
  const project=[
    {Image1:'public/Capture_d’écran_le_2021-04-06_à_11.32.11.jpg',
      Image2:'public/BEST_site_Thumbnail.jpg'
    },
     {Image1:'public/CF_thumbnail.jpg',
      Image2:'public/crisis24_behance_1920X1200_cartes.jpg'
    },
     {Image1:'public/featuredimage_opto.jpg',
      Image2:'public/OKA_thumbnail.jpg'
    }
    , {Image1:'public/PJC_SiteK72_Thumbnail_1200x1920.jpg',
      Image2:'public/PME-MTL_Thumbnail.jpg'
    },
     {Image1:'public/thumbnailimage_OSM.jpg',
      Image2:'public/thumbnailimage_shelton.jpg'
    } ,
    {Image1:'public/thumbnailimage_SollioAg.jpg',
      Image2:'public/MOD_K72_20211104_CS_Divan_419.jpg'
    } ,
    {Image1:'public/PME-MTL_mosaic_4images.jpg',
      Image2:'public/PME-MTL_Thumbnail.jpg'
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