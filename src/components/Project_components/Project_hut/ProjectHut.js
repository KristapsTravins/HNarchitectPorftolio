import React,{useRef,useEffect} from 'react'
import "./css/global.css"
import "./css/mobile.css"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import { useInView } from 'react-intersection-observer';


import { ProjectHover,ProjectOpenClose } from '../hooks/ProjectHook'


const ProjectHut = (props) => {

const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();


  return (
    <motion.div 
    className='project_hut_outer'
  
    >
      
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}
    animationClosed={true}
    />
    <ProjectTitle
    animationClosed={true}
    title={["HEMP","HUT"]}
    UpperAnimation={{
      width:"100%",
      opacity:1
     }}
    LowerAnimation={{
      width:"100%",
      opacity:1,
      marginLeft:"50px"
     }}
      />
   
    <motion.div 
         className='img_1'
         
         animate={{
            y:45,
            opacity:1
          }}
          transition={{ ease: "easeIn", duration: 1.4 }}
         >
            <AImg1 />   
    </motion.div>
 
    <motion.div 
         className='img_2'
 
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1 }}
         >   
            <AImg2 />
    </motion.div>

   

    <motion.div 
         className='img_3'
         
         animate={{
           x:55,
           opacity:1
          }}
          transition={{ ease: "easeIn", duration: 1.4, delay:2 }}
         >   
            <AImg3 />
    </motion.div>


     
        <TriggerBox 
        link="/hemp"
        hover={{hoverState,setHoveState}}
        projectOpen={{openState,setOpenState}}
        />


    </motion.div>
  )
}

export default ProjectHut

/* 

[ Modular prefab home ]
[ Concept ]
[ 2022 ]
[ Latvia ]
[ 40 sq.m. ]

 */