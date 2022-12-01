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
import { useAnimationPositions, useDetectHover,useWindowDimensions } from '../hooks/useSectionHooks'

const Hut = (props) => {
const hooks = useDetectHover();

const width = useWindowDimensions().width;

  return (
    <motion.div 
    className='project_hut_outer'>
  
    <motion.div 
    className={`img_1`}
    animate={hooks.isHovered?useAnimationPositions({x:50,y:-20},{x:16,y:-5},{x:16,y:-5},{x:35,y:15},width):""}
    transition={{duration:1.5}}

    >
        <AImg1 />   
    </motion.div>
 
    <motion.div className='img_2'>   
            <AImg2 />
    </motion.div>
    <motion.div 
         className='img_3'
         animate={hooks.isHovered?useAnimationPositions({x:30,y:25},{x:23,y:5},{x:10,y:20},{x:10,y:-3},width):{}}
         transition={{duration:1.5}}
      
         >  
            <AImg3 />
    </motion.div>
    <Trigger hoverState={hooks} openPage={props.setPage} page="HUT" slider={props.sliderData} />
    <ProjectTitle 
    delay={3}
    title={["HEMP","HUT"]} />
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}/>


    </motion.div>
  )
}

export default Hut