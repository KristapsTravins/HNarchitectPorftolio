import React,{useEffect,useState} from 'react'
import "./scss/animations/animations.scss"
import "./scss/global.scss"
import "./scss/view.scss"

import { motion } from "framer-motion"
import { BImg1,BImg2,BImg3  } from '../../../assets/images/ImageComponents'
import { useAnimationPositions, useDetectHover,useWindowDimensions } from '../hooks/useSectionHooks'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'




const ProjectCrater = (props) => {


  return (
    <motion.div 
    className='project_clound_outer'
    >
  <motion.div className='img_1'>   
           <BImg1 />
  </motion.div>
  
  <motion.div className='img_2' >   
           <BImg2 />
    </motion.div>
    
  <motion.div className='img_3'>   
           <BImg3 />
  </motion.div>
  <ProjectTitle 
    delay={3}
    title={["CLOUND","CATHER"]} />
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}/>
    </motion.div>


  )
}

export default ProjectCrater