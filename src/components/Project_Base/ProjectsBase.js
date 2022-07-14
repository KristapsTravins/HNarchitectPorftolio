import React from 'react'
import { motion } from "framer-motion"
import "./Project_base_styles/css/global.css"
import { ExpansionState, HoverState } from './hooks/ExpansionState'
import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";
import useWindowDimensions from "../../assets/hooks/useWindowDimensions";



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
const hoverHook = HoverState();
const expanHook = ExpansionState();
const {width} = useWindowDimensions();


  return (
   <motion.div
   className='project_base'
   animate={expanHook.ExpansionState?projectExpanParam:{}}
   transition={expanHook.ExpansionState?{duration:1}:{duration:1,delay:1}}>

  <ProjectComp

  OpenClose={expanHook}
  HoverInOut={hoverHook}

  title={projectTitle} 
  title_add_style={/* GivePosition(projectName,false,"title",width) */{}}
  titlePosition={GivePosition(projectName,expanHook.ExpansionState,"title",width)}
  
  titleDescription={projectTitleDescription}
  titleDescriptionPosition={GivePosition(projectName,expanHook.ExpansionState,"title_description",width)}
  titleDescriptionPositionInit={GivePosition(projectName,false,"title_description",width)}

  img_1_Position={GivePosition(projectName,expanHook.ExpansionState,"img_1",width)}
  img_2_Position={GivePosition(projectName,expanHook.ExpansionState,"img_2",width)}
  img_3_Position={GivePosition(projectName,expanHook.ExpansionState,"img_3",width)}
  img_4_Position={GivePosition(projectName,expanHook.ExpansionState,"img_4",width)}
  img_5_Position={GivePosition(projectName,expanHook.ExpansionState,"img_5",width)}
  img_6_Position={GivePosition(projectName,expanHook.ExpansionState,"img_6",width)}
  img_7_Position={GivePosition(projectName,expanHook.ExpansionState,"img_7",width)}

  ProjectDescription_1_postition ={GivePosition(projectName,expanHook.ExpansionState,"text_description_1",width)} 
  ProjectDescription_2_postition ={GivePosition(projectName,expanHook.ExpansionState,"text_description_2",width)}
  ProjectDescription_3_postition ={GivePosition(projectName,expanHook.ExpansionState,"text_description_3",width)}
  ProjectDescription_4_postition ={GivePosition(projectName,expanHook.ExpansionState,"text_description_4",width)}

  text1={projectDescriptionText1}
  text2={projectDescriptionText2}
  text3={projectDescriptionText3}
  text4={projectDescriptionText4}

  text_intial_pos={GivePosition(projectName,false,"text_description_1",width)} 
  text2_addonStyle={{"textAlign":"right"}}
  img_4_Position_start = {GivePosition(projectName,false,"img_4",width)}
  
  />





   </motion.div>
  )
}

export default ProjectsBase