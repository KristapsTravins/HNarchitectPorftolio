import React,{useEffect,useState} from 'react'
import "./scss/animations/animations.scss"
import "./scss/global.scss"
import "./scss/view.scss"
import Trigger from '../../TriggerBox/Trigger'
import { motion } from "framer-motion"
import { BImg1,BImg2,BImg3  } from '../../../assets/images/ImageComponents'
import { useAnimationPositions, useAnimationPositionsCrater, useDetectHover,useWindowDimensions } from '../hooks/useSectionHooks'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'




const ProjectCrater = (props) => {

  const hooks = useDetectHover();
  const width = useWindowDimensions().width;
/*   hooks.isHovered= true; */
  return (
    <motion.div 
    className='project_clound_outer'
    >
  <motion.div 
  className='img_1'
  animate={hooks.isHovered?useAnimationPositionsCrater({x:20,y:-15},{x:36,y:-7},{x:40,y:-9},{x:10,y:-12},width):{}}
  transition={{duration:1.5}}
  >   
           <BImg1 />
  </motion.div>
  
  <motion.div className='img_2' >   
           <BImg2 />
    </motion.div>
    
  <motion.div 
  className='img_3'
  animate={hooks.isHovered?useAnimationPositionsCrater({x:30,y:30},{x:50,y:20},{x:15,y:3},{x:15,y:3},width):{}}
  transition={{duration:1.5}}
  >   
           <BImg3 />
  </motion.div>
  <ProjectTitle 
    delay={3}
    title={["CLOUND","CATHER"]} />
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}/>
    <Trigger hoverState={hooks} openPage={props.setPage} page="CATHER" slider={props.sliderData}/>
    </motion.div>
    


  )
}

export default ProjectCrater