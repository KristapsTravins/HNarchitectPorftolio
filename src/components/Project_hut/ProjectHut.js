import React from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from '../../assets/hooks/useWindowDimensions'
import {AImg1,AImg2,AImg3,AImg4,AImg5} from "../../assets/images/ImageComponents"
import ProjectTitle from '../Project_title/ProjectTitle'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import AnimationData from './animationData/animationData.json'
 

import "./css/mobile.css";
import "./css/tab.css";
import "./css/desktop.css";


const ProjectHut =(props)=> {

  const { width } = useWindowDimensions();
  console.log(width)
  return (
    <motion.div 
    className='project_huts_main'
    animate={{height:"5000px"}}
    >
      <div className='project_huts_inner'>

  
        <div 
        className='project_huts_trigger_box'
 
        onClick={()=>{
          props.sectionOpen.setSectionState(!props.sectionOpen.sectionState);
         
        }}
        ></div>
          <ProjectTitle mobileAnim={props.sectionOpen.sectionState?AnimationData.OpenAnimation.mobile.title_animation:{}}/>
          <motion.div
            className='huts_img1'
            animate={props.sectionOpen.sectionState?AnimationData.OpenAnimation.mobile.img1_animation:{}}
            >
            <AImg2/>
          </motion.div>

          <motion.div
            className='huts_img2'
            >
            <AImg1/>
          </motion.div>

          <motion.div
            className='huts_img3'
            >
            <AImg3/>
          </motion.div>

          {props.sectionOpen?<motion.div className='huts_img4'><AImg4/></motion.div>:<></>}
          {props.sectionOpen?<motion.div className='huts_img5'><AImg5/></motion.div>:<></>}
          <ProjectDescription titleDescription={props.titleDescriptionData} mobileAnim={props.sectionOpen.sectionState?AnimationData.OpenAnimation.mobile.title_description_animation:{}}  />

      </div>
    </motion.div>
  )
}

export default ProjectHut