import React from 'react'
import { motion } from "framer-motion"
import "./css/global.css"






const ProjectsBase = ({

   child: ProjectComp,

  }) => {



  return (
  <motion.div 
  className='project_base'
  >

   <ProjectComp />

   </motion.div>
  )
}

export default ProjectsBase