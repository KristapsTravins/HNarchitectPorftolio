import React, { useRef,useEffect } from 'react'
import "./scss/animations.scss"
import "./scss/main.scss"
import "./scss/view.scss"

import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import { AnimatePresence, motion, useInView } from "framer-motion"
import { CImg6,CImg5,CImg3  } from '../../../assets/images/ImageComponents'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import Trigger from '../../TriggerBox/Trigger'
import { useDetectHover,useWindowDimensions, useAnimationPositionsAnn,useWasInView } from '../hooks/useSectionHooks'






const ProjectAnna = (props) => {
  
  const hooks = useDetectHover();
  const viewSet = useWasInView();
  const width = useWindowDimensions().width;
  const refs = useRef(null)
  const isInView = useInView(refs)
  

  return (
    
    <div 
    className='project_ann_outer'
    ref={refs}
    >
    <AnimatePresence>
    {isInView&&(
        <ProjectTitle
        animationClosed={true}
        title={["ANNAS"]}
        />
    )}
    {isInView&&(
        <motion.div 
        className='img_1'
        >   
         <CImg5 />
        </motion.div>
      
    )}
    {isInView&&(
        <motion.div 
        className='img_2'
        animate={hooks.isHovered?useAnimationPositionsAnn({x:-40,y:40},{x:20,y:60},{x:10,y:20},{x:-10,y:21},{x:-60,y:23},{x:0,y:23},{x:10,y:-3},{},width):{}}
        transition={{duration:1.5}}
        >   
                 <CImg6 />
          </motion.div>
    )}
    {isInView&&(
       <motion.div 
       className='img_3'
       animate={hooks.isHovered?useAnimationPositionsAnn({x:15,y:35},{x:23,y:5},{x:2,y:6},{x:2,y:6},{x:23,y:5},{x:10,y:20},{x:10,y:-3},{},width):{}}
       transition={{duration:1.5}}
       >   
                <CImg3 />
         </motion.div>
    )}
  {isInView&&(
        <ProjectDescription 
        titleDescription={["Family home","Construction","2022","Atacoma Desert","195 sq.m."]}
        animationClosed={true}
        
        />
    )}
    {isInView&&(
        <Trigger  hoverState={hooks} openPage={props.setPage} page="ANN" slider={props.sliderData} />
    )}

 
  
   

    </AnimatePresence>
    </div>
  )
}

export default ProjectAnna