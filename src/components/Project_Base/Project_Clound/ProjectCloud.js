import React from 'react'
import './css/global.css'
import './css/mobile.css'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import ProjectText from '../Project_description_text/ProjectText'
import { motion } from "framer-motion"
import {BImg1,BImg2,BImg3,BImg4,BImg5,BImg6} from '../../../assets/images/ImageComponents'

const ProjectCloud = (props) => {


    return (
      <div className='project_cloud_box'>
        

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

      </div>
    )
  }
  
  export default ProjectCloud