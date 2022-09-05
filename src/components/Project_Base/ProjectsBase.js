import React from 'react'
import { motion } from "framer-motion"
import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";
import ProjectCrater from '../Project_components/Project_clound/ProjectCrater';









const ProjectsBase = () => {




  return (
  <motion.div 
  className='projects_base'
    >
      <ProjectHut />
      <ProjectCrater />

   </motion.div>
  )
}

export default ProjectsBase