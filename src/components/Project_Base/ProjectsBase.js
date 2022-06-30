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
   projectDescriptionText1,
   projectDescriptionText2
  }) => {
const expanHook = ExpansionState();
const {width} = useWindowDimensions();



  return (
   <motion.div
   className='project_base'
   animate={expanHook.ExpansionState?projectExpanParam:{}}
   transition={expanHook.ExpansionState?{duration:1}:{duration:1,delay:1}}>

  <ProjectComp 
  OpenClose={expanHook} 
  title={projectTitle} 
  title_add_style={GivePosition("project_hut",false,"title",width)}
  titlePosition={GivePosition("project_hut",expanHook.ExpansionState,"title",width)}
  titleDescription={projectTitleDescription}
  titleDescriptionPosition={GivePosition("project_hut",expanHook.ExpansionState,"title_description",width)}
  img_1_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_1",width)}
  img_2_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_2",width)}
  img_3_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_3",width)}
  img_4_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_4",width)}
  img_5_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_5",width)}
  ProjectDescription_1_postition ={GivePosition("project_hut",expanHook.ExpansionState,"text_description_1",width)} 
  ProjectDescription_2_postition ={GivePosition("project_hut",expanHook.ExpansionState,"text_description_2",width)}
  text1={projectDescriptionText1}
  text2={projectDescriptionText2}
  text_intial_pos={GivePosition("project_hut",false,"text_description_1",width)} 
  text2_addonStyle={{"textAlign":"right"}}
  img_4_Position_start = {GivePosition("project_hut",false,"img_4",width)}
  
  />





   </motion.div>
  )
}

export default ProjectsBase