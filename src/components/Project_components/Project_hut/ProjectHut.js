import React from 'react'
import "./css/global.css"
import "./css/mobile.css"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'



import { ProjectHover,ProjectOpenClose } from '../hooks/ProjectHook'


const ProjectHut = (props) => {

const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();

  return (
    <motion.div 
    className='project_hut_outer'
    style={{"height":"645px"}}
    animate={openState?{"width":"100%","height":"1000px"}:{}}
    transition={{ delay: 1,duration:2 }}

    >
      
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}
    titleDescriptionPosition={openState?{top:"360px"}:{}}
    ExpandState={openState}
    />
    <ProjectTitle
    bottomAnim={{marginTop:"4px",marginLeft:"-1px",width:"100%",
    opacity:1}}
    OpenPos={{top:"185px"}}
    ExpandState={openState} 
    title={["HEMP","HUT"]}
      />
   
    <motion.div 
         className='img_1'
         style={{"border":"1px solid black"}}
         animate={!openState?{
            y:45,
            opacity:1
          }:{
            opacity:1,
            right:"1px",
            top:"530px"
          }}
          transition={{ ease: "easeIn", duration: 1.4 }}
         >
          {/*   <AImg1 />    */}
    </motion.div>
 
    <motion.div 
         className='img_2'
         style={{"border":"1px solid black"}}
         animate={!openState?{
          x:35,
          opacity:1
         }:{
           right:"1px",
           width:"629px",
           height:"376px",
           opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1 }}
         >   
         {/*    <AImg2 /> */}
    </motion.div>

   

    <motion.div 
         className='img_3'
         style={{"border":"1px solid black"}}
         animate={{
           x:55,
           opacity:1
          }}
          transition={{ ease: "easeIn", duration: 1.4, delay:2 }}
         >   
           {/*  <AImg3 /> */}
    </motion.div>


     
        <TriggerBox 
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