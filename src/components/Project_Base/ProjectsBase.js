import React from 'react'
import { motion } from "framer-motion"
import "./css/global.css"






const ProjectsBase = ({
   projectName,
   child: ProjectComp,
   projectExpanParam,
   projectTitle,
   projectTitleDescription,
   projectDescriptionText1,
   projectDescriptionText2,
   projectDescriptionText3,
   projectDescriptionText4
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