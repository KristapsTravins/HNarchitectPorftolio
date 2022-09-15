import React,{useEffect} from 'react'
import "./css/global.css"
import "./css/view.css"

import { motion } from "framer-motion"
import { BImg1,BImg2,BImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import { useInView } from 'react-intersection-observer';
import { GetAnimationSect2 } from '../animation_data/GetAnimationVals/GetAnimationVals'



import { ProjectHover,ProjectOpenClose,IsInView } from '../hooks/ProjectHook'


const ProjectCrater = (props) => {

const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();
const { ref, inView } = useInView();
const {view,setview} = IsInView();

const appearInView = () =>{
  inView?setview(true):<></>
}

useEffect(()=>{
  appearInView()
},[inView])

const animationData = GetAnimationSect2();

  return (
    <motion.div 
    className='project_clound_outer'
    ref={ref}
    inView={inView}
    >
   

   {view?<ProjectDescription titleDescription={['Tiny House',"Concept","2022","Atacoma Desert","25 sq.m."]} animationClosed={true}/>:<></>}

   {view?<ProjectTitle
    animationClosed={true}
    title={["CLOUND","CATHER"]}
    UpperAnimation={animationData.title.animation.upper}
    LowerAnimation={animationData.title.animation.lower}
    UpperAnimationTransition={animationData.title.transition.upper}
    LowerAnimationTransition={animationData.title.transition.lower}
    />:<></>}
  {view?<motion.div 
         className='img_1'
 
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1 }}
         >   
           <BImg1 />
    </motion.div>:<></>}
  
  {view?<motion.div 
         className='img_2'
 
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:0.5 }}
         >   
           <BImg2 />
    </motion.div>:<></>}
    
  {view?<motion.div 
         className='img_3'
 
          animate={animationData.img_3.animation}
          transition={animationData.img_3.transition}
         >   
           <BImg3 />
    </motion.div>:<></>
}


    
   
    </motion.div>
  )
}

export default ProjectCrater