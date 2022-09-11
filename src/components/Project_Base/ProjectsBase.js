import React, { useState } from 'react'


import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";
import ProjectCrater from '../Project_components/Project_clound/ProjectCrater';
import ProjectAnna from '../Project_components/Project_ann/ProjectAnna';









const ProjectsBase = () => {

const[section2,setSection2]=useState(false);



  return (
  <div 
  className='projects_base'
    > 
  
    <ProjectHut 

    />
    <ProjectCrater sectionFun ={{section2,setSection2}} />
    <ProjectAnna />
   
   </div>
  )
}

export default ProjectsBase