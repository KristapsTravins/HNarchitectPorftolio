import React from 'react'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import ProjectText from '../Project_description_text/ProjectText'
import { motion } from "framer-motion"
import {BImg1,BImg2,BImg3,BImg4,BImg5,BImg6} from '../../../assets/images/ImageComponents'
import TrigerBox from '../Trigger_box/TrigerBox'
import './css/mobile.css'
import './css/global.css'
import './css/tab.css'

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
    animate={props.HoverInOut.HoverState?{"left":"533px","top":"85px"}:props.img_1_Position}
    transition={{duration:1}}
    >
    <BImg1 />
    </motion.div>

    <motion.div 
    className='img_2'
    animate={props.HoverInOut.HoverState?{"left":"10px"}:props.img_2_Position}
    transition={{duration:1}}
    >
    <BImg2 />
    </motion.div>
    
    <motion.div 
    className='img_3'
    animate={props.HoverInOut.HoverState?{"top":"363px"}:props.img_3_Position}
    transition={{duration:1}}
    >
    <BImg3 />
    </motion.div>



    <ProjectDescription 
    titleDescription={props.titleDescription}
    titleDescriptionPosition={props.titleDescriptionPosition}
    titleDescriptionPositionInit={props.titleDescriptionPositionInit}
    />



    <motion.div 
    className='img_4'
    animate={props.img_4_Position}
    transition={{duration:1}}
    >
      {/* wrong pic  */}
    <BImg3 />
    </motion.div>

    <motion.div 
    className='img_5'
    animate={props.img_5_Position}
    transition={{duration:1}}
    >
    <BImg4 />
    </motion.div>


    <motion.div 
    className='img_6'
    animate={props.img_6_Position}
    transition={{duration:1}}
    >
    {/* wrong pic  */}
    <BImg3 />
    </motion.div>

    <motion.div 
    className='img_7'
    animate={props.img_7_Position}
    transition={{duration:1}}
    >
    {/* wrong pic  */}
    <BImg5 />
    </motion.div>







    <ProjectText
    text_intial_pos={/* props.text_intial_pos */{}}
    project_text={props.text1}
    ProjectDescription_Position={props.ProjectDescription_1_postition}
   />





  <ProjectText
    text_intial_pos={{
      "width":"126px",
      "height":"70px",
      "textAlign":"right"  
    }}
    project_text={props.text2}
    ProjectDescription_Position={props.ProjectDescription_2_postition}
   />

  <ProjectText
    project_text={props.text3}
    ProjectDescription_Position={props.ProjectDescription_3_postition}
   />
    <ProjectText
    text_intial_pos={{
      "textAlign":"right"  
    }}
   project_text={props.text4}
   ProjectDescription_Position={props.ProjectDescription_4_postition}
  />



      </div>
    )
  }
  
  export default ProjectCloud