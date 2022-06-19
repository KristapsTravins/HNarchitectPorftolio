import React from 'react'
import { motion } from "framer-motion"
import "./Project_base_styles/css/global.css"
import { ExpansionState } from './hooks/ExpansionState'


const ProjectsBase = ({child: ProjectComp ,projectExpanParam,}) => {
const expanHook = ExpansionState();
  return (
   <motion.div
   className='project_base'
   animate={expanHook.ExpansionState?projectExpanParam:{}}
   transition={{duration:0.1}}>
  <ProjectComp OpenClose={expanHook} />
   </motion.div>
  )
}

export default ProjectsBase