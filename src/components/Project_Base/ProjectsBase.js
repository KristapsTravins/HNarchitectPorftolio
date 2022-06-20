import React from 'react'
import { motion } from "framer-motion"
import "./Project_base_styles/css/global.css"
import { ExpansionState } from './hooks/ExpansionState'
import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";
import useWindowDimensions from "../../assets/hooks/useWindowDimensions";


const ProjectsBase = ({
   child: ProjectComp,
   projectExpanParam,
   projectTitle,
   projectTitleDescription,
  }) => {
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
  titleDescription={projectTitleDescription}
  titlePosition={GivePosition("project_hut",expanHook.ExpansionState,"title",width)}

  img_1_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_1",width)}
  img_2_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_2",width)}
  />

   </motion.div>
  )
}

export default ProjectsBase