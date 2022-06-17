import React from 'react'
import { motion } from "framer-motion"
import "./Project_base_styles/css/global.css"
import ProjectHut from './Project_hut/ProjectHut'

function ProjectsBase(props) {
  return (
   <motion.div
   className='project_base'

   >
    <ProjectHut />
   </motion.div>
  )
}

export default ProjectsBase