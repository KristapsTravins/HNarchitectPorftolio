import React,{useState} from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from '../../assets/hooks/useWindowDimensions'
import {AImg1,AImg2,AImg3,AImg4,AImg5} from "../../assets/images/ImageComponents"
import ProjectTitle from '../Project_title/ProjectTitle'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import animData from "./animationData/animationData.json"


import "./css/mobile.css";
import "./css/tab.css";
import "./css/desktop.css";
import { SetHoverAnimation, SetAnimations } from './hooks/setAnimations'


const ProjectHut =(props)=> {
  const { width } = useWindowDimensions();
  const {state, setHoverEffect} = SetHoverAnimation();
  const [openState,setOpenState] = useState(false);
  
  return (
    <motion.div className='project_huts_main'>
      <div className='project_huts_inner'>
        <div className='project_huts_trigger_box'
        onMouseEnter={()=>{setHoverEffect(width,true)}}
        onMouseLeave={()=>{setHoverEffect(width,false)}}
        onClick={()=>{
          setHoverEffect(width,false)
          setOpenState(true)
        }}

        ></div>
          <ProjectTitle />
          <motion.div
            className='huts_img1'
            animate={SetAnimations(state)}
            transition={animData.HoverAnimations.img1.transitions}
            >
            <AImg2/>
          </motion.div>

          <motion.div
            className='huts_img2'
            animate={state?animData.HoverAnimations.img2.move:{}}
            transition={animData.HoverAnimations.img2.transitions}
            >
            <AImg1/>
          </motion.div>

          <motion.div
            className='huts_img3'
            animate={state?animData.HoverAnimations.img3.move:{}}
            transition={animData.HoverAnimations.img3.transitions}
            
            >
            <AImg3/>
          </motion.div>

          {props.sectionOpen?<motion.div className='huts_img4'><AImg4/></motion.div>:<></>}
          {props.sectionOpen?<motion.div className='huts_img5'><AImg5/></motion.div>:<></>}
          <ProjectDescription titleDescription={props.titleDescriptionData}  />

      </div>
    </motion.div>
  )
}

export default ProjectHut