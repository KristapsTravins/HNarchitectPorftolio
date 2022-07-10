import React from 'react'
import './css/global.css'
import './css/mobile.css'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import ProjectText from '../Project_description_text/ProjectText'
import { motion } from "framer-motion"
import {AImg1,AImg2,AImg3,AImg4,AImg5} from '../../../assets/images/ImageComponents'
import TrigerBox from '../Trigger_box/TrigerBox'



const ProjectHut = (props) => {

   
   

  return (
    <div className='project_hut_box'>

  

    <TrigerBox 
    OpenCloseTrigger={props.OpenClose.setExpansionState} 
    OpenCloseState={props.OpenClose.ExpansionState} 
    HoverStateChange={props.HoverInOut.setHoverState}
    HoverState={props.HoverInOut.HoverState}
    />


    <motion.div 
    className='img_1'
    animate={props.HoverInOut.HoverState?{"top":"20px"}:props.img_1_Position}
    transition={{duration:1}}
    >
    <AImg1 />
    </motion.div>

    <motion.div 
    className='img_2'
    animate={props.HoverInOut.HoverState?{"right":"300px"}:props.img_2_Position}
    transition={{duration:1}}
    >
    <AImg2 />
    </motion.div>

    <motion.div 
    className='img_3'
    animate={props.HoverInOut.HoverState?{"top":"320px"}:props.img_3_Position}
    transition={{duration:1}}
    >
    <AImg3 />
    </motion.div>

    <ProjectTitle
    title={props.title}
    add_style = {props.title_add_style} 
    titlePosition={props.titlePosition} 
    transition={{duration:1}}
    />
    <ProjectDescription 
    titleDescription={props.titleDescription}
    titleDescriptionPosition={props.titleDescriptionPosition}
    />

  <ProjectText
    text_intial_pos={props.text_intial_pos}
    project_text={props.text1}
    ProjectDescription_Position={props.ProjectDescription_1_postition}
    />

  <ProjectText
    text_intial_pos={props.text_intial_pos}
    text_add_style={props.text2_addonStyle}
    project_text={props.text2}
    ProjectDescription_Position={props.ProjectDescription_2_postition}
  />

  <motion.div 
    className='img_4'
    animate={props.img_4_Position}
    transition={{duration:1}}
    style={props.img_4_Position_start} 
    >
    <AImg4 />
  </motion.div>
  <motion.div 
    className='img_5'
    animate={props.img_5_Position}
    transition={{duration:1}}
    >
    <AImg5 />
  </motion.div>

 
    </div>
  )
}

export default ProjectHut