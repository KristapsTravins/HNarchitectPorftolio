import React from 'react'


import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";
import ProjectCrater from '../Project_components/Project_clound/ProjectCrater';
import ProjectAnna from '../Project_components/Project_ann/ProjectAnna';









const ProjectsBase = (props) => {




  return (
  <div 
  className='projects_base'
    > 
<ProjectHut ComponentSw={props.componentShow} />
  <ProjectCrater ComponentSw={props.componentShow}  />
{/* <ProjectAnna  ComponentSw={props.componentShow}  /> */}

   </div>
  )
}

export default ProjectsBase