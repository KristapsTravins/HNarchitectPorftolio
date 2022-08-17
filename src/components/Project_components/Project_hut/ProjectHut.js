import React from 'react'
import "./css/global.css"
import "./css/mobile.css"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'

const ProjectHut = (props) => {
  return (
    <div 
    className='project_hut_outer'
    style={{"height":"645px"}}
    >
    <ProjectDescription titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}/>
   
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
    {/*       <TriggerBox width="590px" height="333px" top="133px" left="34px" /> */}
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

    <ProjectTitle title={["HEMP","HUT"]} />

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

    </div>
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