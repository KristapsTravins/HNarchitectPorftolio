import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer';

import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";
import ProjectCrater from '../Project_components/Project_clound/ProjectCrater';
import ProjectAnna from '../Project_components/Project_ann/ProjectAnna';






{/* <ProjectHut />
<ProjectCrater /> 
<ProjectAnna /> */}


const ProjectsBase = () => {

const myRef = useRef()
const { myref: ref, inView } = useInView();
console.log(myRef);


  return (
  <div 
  className='projects_base'
    > 
    <div>
    <ProjectHut/>

    <ProjectCrater   /> 
   
    
    <ProjectAnna />
    </div>   
   </div>
  )
}

export default ProjectsBase