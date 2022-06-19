import React from 'react'
import { motion } from "framer-motion"
import "./Project_base_styles/css/global.css"
import { ExpansionState } from './hooks/ExpansionState'
import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";
import useWindowDimensions from "../../assets/hooks/useWindowDimensions";


const ProjectsBase = ({child: ProjectComp ,projectExpanParam,projectTitle}) => {
const expanHook = ExpansionState();
const {width} = useWindowDimensions();


  return (
   <motion.div
   className='project_base'
   animate={expanHook.ExpansionState?projectExpanParam:{}}
   transition={{duration:0.1}}>
  <ProjectComp 
  OpenClose={expanHook} 
  title={projectTitle} 
  titlePosition={GivePosition("project_hut",expanHook.ExpansionState,"title",width)}
  />
   </motion.div>
  )
}

export default ProjectsBase