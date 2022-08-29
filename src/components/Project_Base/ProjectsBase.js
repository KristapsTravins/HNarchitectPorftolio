import React from 'react'
import { motion } from "framer-motion"
import "./css/global.css"

import ProjectHut from "../Project_components/Project_hut/ProjectHut";






const ProjectsBase = ({

   child: ProjectComp,

  }) => {


const ProjectsBase = () => {




  return (
  <motion.div 
  className='projects_base'
    >
      <ProjectHut />
   </motion.div>
  )
}

export default ProjectsBase