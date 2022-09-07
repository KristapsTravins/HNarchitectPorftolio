import React from 'react'
import { motion } from "framer-motion"
import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";
import ProjectCrater from '../Project_components/Project_clound/ProjectCrater';
import ProjectAnna from '../Project_components/Project_ann/ProjectAnna';









const ProjectsBase = () => {




  return (
  <motion.div 
  className='projects_base'
    > 
      <ProjectHut />
       <ProjectCrater /> 
      <ProjectAnna />
      

   </motion.div>
  )
}

export default ProjectsBase