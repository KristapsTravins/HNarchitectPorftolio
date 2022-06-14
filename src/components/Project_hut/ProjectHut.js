import React, { useState,useEffect } from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from '../../assets/hooks/useWindowDimensions'
import {AImg1,AImg2,AImg3,AImg4,AImg5} from "../../assets/images/ImageComponents"
import ProjectTitle from '../Project_title/ProjectTitle'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import AnimationData from './animationData/animationData.json'
import OpenProjectDescription from '../Project_description/OpenProjectDescription'


import "./css/mobile.css";
import "./css/tab.css";
import "./css/desktop.css";
import { SetAnimations } from './hooks/setAnimations'


const ProjectHut =(props)=> {

  const { width } = useWindowDimensions();
  const [animationWidthState,setAnimationState] = useState({})
  useEffect(() => {
    setAnimationState(SetAnimations(width))
  }, [width])
  


  return (
    <motion.div 
    className='project_huts_main'
    animate={{height:"1790px"}}
    >
      <div className='project_huts_inner'>
        <div 
        className='project_huts_trigger_box'
 
        onClick={()=>{
          props.sectionOpen.setSectionState(!props.sectionOpen.sectionState);
         
        }}
        ></div>
          <ProjectTitle 
          mobileAnim={props.sectionOpen.sectionState?animationWidthState.title_animation:{}}/>
          <motion.div
            className='huts_img1'
            animate={props.sectionOpen.sectionState?animationWidthState.img1_animation:{}}
            transition={{duration:1}}
            >
            <AImg2/>
          </motion.div>



          <motion.div
            className='huts_img2'
            animate={props.sectionOpen.sectionState?animationWidthState.img2_animation:{}}
            transition={{duration:1.5}}
            >
            <AImg1/>
          </motion.div>

          <motion.div
            className='huts_img3'
            animate={props.sectionOpen.sectionState?animationWidthState.img3_animation:{}}
            transition={{duration:1.5}}
            >
            <AImg3/>
          </motion.div>
          <OpenProjectDescription OpenProjectDesc={props.sectionOpen.sectionState?animationWidthState.proj_text_description:{}} />
          <OpenProjectDescription OpenProjectDesc={props.sectionOpen.sectionState?animationWidthState.proj_text_description2:{}} />
          
          {props.sectionOpen?<motion.div className='huts_img5' animate={props.sectionOpen.sectionState?animationWidthState.img5_animation:{}/*  */} transition={{duration:1.5}}><AImg5/></motion.div>:<></>}
          <ProjectDescription titleDescription={props.titleDescriptionData} mobileAnim={props.sectionOpen.sectionState?animationWidthState.title_description_animation:{}}  />

      </div>
    </motion.div>
  )
}

export default ProjectHut
