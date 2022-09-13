import React from 'react'


import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";
import ProjectCrater from '../Project_components/Project_clound/ProjectCrater';
import ProjectAnna from '../Project_components/Project_ann/ProjectAnna';









const ProjectsBase = () => {




  return (
  <div 
  className='projects_base'
    > 

  
    <ProjectHut />{/* 
    <ProjectCrater />
    <ProjectAnna /> */}

   </div>
  )
}

export default ProjectsBase