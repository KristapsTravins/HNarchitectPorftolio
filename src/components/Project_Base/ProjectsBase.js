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

const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>";

const text2 = "<p>Regarding the material usage, high focus is placed on <span> renewables, carbon neutral and long lasting materials.</span><br><br>  <span> Wood </span> was used for the load bearing constructins, as well indor and outdoor wall finishes,<br><br>  <span> Hemp </span> products are used for insulation and sealing.</p>";


/* need to move somewhere  */




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
  
  text1={text1}
  
  ProjectDescription_1_postition ={GivePosition("project_hut",expanHook.ExpansionState,"text_description_1",width)} 
  
  text2={text2}
  text_intial_pos={GivePosition("project_hut",false,"text_description_1",width)} 
  text2_addonStyle={{"textAlign":"right"}}
  ProjectDescription_2_postition ={GivePosition("project_hut",expanHook.ExpansionState,"text_description_2",width)}
  
  />





   </motion.div>
  )
}

export default ProjectsBase