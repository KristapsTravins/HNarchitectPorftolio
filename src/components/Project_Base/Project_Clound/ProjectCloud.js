import React from 'react'
import './css/global.css'
import './css/mobile.css'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import ProjectText from '../Project_description_text/ProjectText'
import { motion } from "framer-motion"
import {BImg1,BImg2,BImg3,BImg4,BImg5,BImg6} from '../../../assets/images/ImageComponents'
import TrigerBox from '../Trigger_box/TrigerBox'

const ProjectCloud = (props) => {


    return (
      <div className='project_cloud_box'>

        

  <TrigerBox 
    OpenCloseTrigger={props.OpenClose.setExpansionState} 
    OpenCloseState={props.OpenClose.ExpansionState} 
    HoverStateChange={props.HoverInOut.setHoverState}
    HoverState={props.HoverInOut.HoverState}
    />


    <ProjectTitle
    title={props.title}
    add_style = {props.title_add_style} 
    titlePosition={props.titlePosition} 
    transition={{duration:1}}
    />
    <motion.div 
    className='img_1'
    animate={props.img_1_Position}
    transition={{duration:1}}
    >
    <BImg1 />
    </motion.div>
    <motion.div 
    className='img_2'
    animate={props.img_2_Position}
    transition={{duration:1}}
    >
    <BImg2 />
    </motion.div>
    
    <motion.div 
    className='img_3'
    animate={props.img_3_Position}
    transition={{duration:1}}
    >
    <BImg3 />
    </motion.div>

    <ProjectDescription 
    titleDescription={props.titleDescription}
    titleDescriptionPosition={props.titleDescriptionPosition}
    titleDescriptionPositionInit={props.titleDescriptionPositionInit}
    />
    <ProjectText
    text_intial_pos={props.text_intial_pos}
    project_text={props.text2}
    ProjectDescription_Position={props.ProjectDescription_1_postition}
  />

      </div>
    )
  }
  
  export default ProjectCloud