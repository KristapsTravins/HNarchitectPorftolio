import React, { useRef } from 'react'
import "./scss/animations/initial.scss"
import "./scss/animation.scss"
import "./scss/main.scss"
import "./scss/view.scss"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import Trigger from '../../TriggerBox/Trigger'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import { useDetectHover, getXYVals } from '../hooks/useSectionHooks'

const Hut = (props) => {
const input1 = useRef(null);
const a = document.getElementById('S1img_1') 
const hooks = useDetectHover();



  return (
    <motion.div 
    className='project_hut_outer'>
  
    <motion.div 
    className={`img_1`}
    animate={hooks.isHovered?{x:50,y:-20}:{}}
    transition={{duration:1.5}}
    id="S1img_1"
    ref={input1}
    >
        <AImg1 />   
    </motion.div>
 
    <motion.div className='img_2'>   
            <AImg2 />
    </motion.div>
    <motion.div 
         className='img_3'
         animate={hooks.isHovered?{x:30,y:25}:{}}
         transition={{duration:1.5}}
      
         >  
            <AImg3 />
    </motion.div>
    <Trigger hoverState={hooks} />
    <ProjectTitle 
    delay={3}
    title={["HEMP","HUT"]} />
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}
 
    />


    </motion.div>
  )
}

export default Hut