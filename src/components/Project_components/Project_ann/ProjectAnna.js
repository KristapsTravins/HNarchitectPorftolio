import React from 'react'

import "./css/main.css"
import "./css/view.css"

import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import { motion } from "framer-motion"
import { CImg6,CImg5,CImg4,CImg1,CImg2,CImg3  } from '../../../assets/images/ImageComponents'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import TriggerBox from '../../TriggerBox/TriggerBox'
import { ProjectHover,ProjectOpenClose } from '../hooks/ProjectHook'



const ProjectAnna = () => {


const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();

  return (
    <div
    className='project_ann_outer'
   
    >
    <ProjectTitle
    animationClosed={true}
    title={["ANNAS"]}
    UpperAnimation={{
      width:"100%",
      opacity:1,
      marginLeft:"70px"
     }}
    LowerAnimation={{
      width:"100%",
      opacity:1,
     }}
    />
    <motion.div 
         className='img_1'
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:0.5 }}
         >   
           <CImg5 />
    </motion.div>
    <motion.div 
         className='img_2'
 
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1 }}
         >   
           <CImg6 />
    </motion.div>
    <motion.div 
         className='img_3'
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1.5 }}
         >   
           <CImg3 />
    </motion.div>

    <ProjectDescription 
    titleDescription={["Family home","Construction","2022","Atacoma Desert","195 sq.m."]}
    animationClosed={true}
    />


     
    <TriggerBox 
    link="/annas"
    hover={{hoverState,setHoveState}}
    projectOpen={{openState,setOpenState}}
    />
    



    </div>
  )
}

export default ProjectAnna