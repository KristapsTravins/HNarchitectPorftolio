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

/* *********  */

const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>"

/* need to move somewhere  */




  return (
   <motion.div
   className='project_base'
   animate={expanHook.ExpansionState?projectExpanParam:{}}
   transition={{duration:0.1}}>

  <ProjectComp 
  OpenClose={expanHook} 
  title={projectTitle} 
  titlePosition={GivePosition("project_hut",expanHook.ExpansionState,"title",width)}

  titleDescription={projectTitleDescription}
  titleDescriptionPosition={GivePosition("project_hut",expanHook.ExpansionState,"title_description",width)}

  img_1_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_1",width)}
  img_2_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_2",width)}
  img_3_Position={GivePosition("project_hut",expanHook.ExpansionState,"img_3",width)}

  text1={text1}
  ProjectDescription_1_postition ={GivePosition("project_hut",expanHook.ExpansionState,"text_description_1",width)}


  />

   </motion.div>
  )
}

export default ProjectsBase