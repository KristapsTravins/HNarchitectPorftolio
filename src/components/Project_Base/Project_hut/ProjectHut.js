import React from 'react'
import './css/global.css'
import './css/mobile.css'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import ProjectText from '../Project_description_text/ProjectText'
import { motion } from "framer-motion"
import {AImg1,AImg2,AImg3} from '../../../assets/images/ImageComponents'


const ProjectHut = (props) => {

  return (
    <div className='project_hut_box'>



    <motion.div 
    className='img_1'
    animate={props.img_1_Position}
    transition={{duration:1}}
    >
    <AImg1 />
    </motion.div>

    <motion.div 
    className='img_2'
    onClick={() => props.OpenClose.setExpansionState(!props.OpenClose.ExpansionState) }
    animate={props.img_2_Position}
    transition={{duration:1}}
    >
    <AImg2 />
    </motion.div>

    <motion.div 
    className='img_3'
    animate={props.img_3_Position}
    transition={{duration:1}}
    >
    <AImg3 />
    </motion.div>

    <ProjectTitle 
    title={props.title} 
    titlePosition={props.titlePosition} 
    transition={{duration:1}}
    />
    <ProjectDescription 
    titleDescription={props.titleDescription}
    titleDescriptionPosition={props.titleDescriptionPosition}
    />
  <div className='img_4'></div>



    {/* closed */}
   {/*  
    <div className='img_5'></div>
    <ProjectText  />
    <ProjectText  />  */}
    {/* closed */} 
    </div>
  )
}

export default ProjectHut