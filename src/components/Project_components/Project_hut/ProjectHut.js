import React,{useRef,useEffect} from 'react'
import "./css/global.css"
import "./css/mobile.css"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import { useInView } from 'react-intersection-observer';
import { GetAnimation, GetAnimationSect1 } from '../animation_data/GetAnimationVals/GetAnimationVals'

import { ProjectHover,ProjectOpenClose } from '../hooks/ProjectHook'


const ProjectHut = (props) => {

const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();

console.log(GetAnimationSect1().descritpion)
  return (
    <motion.div 
    className='project_hut_outer'
  
    >
      
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}
    DescriptionTransition={GetAnimationSect1().descritpion.transition}
    />
    
    <ProjectTitle
   
    delay={3}
    title={["HEMP","HUT"]}
    UpperAnimation={GetAnimationSect1().title.animation.upper}
    UpperAnimationTransition={GetAnimationSect1().title.transition.upper}
    LowerAnimation={GetAnimationSect1().title.animation.lower}
    LowerAnimationTransition={GetAnimationSect1().title.transition.lower}

      />
   
    <motion.div 
         className='img_1'

          animate={GetAnimationSect1().img_1.animation}
          transition={GetAnimationSect1().img_1.transition}
         >
            <AImg1 />   
    </motion.div>
 
    <motion.div 
         className='img_2'
 
         animate={GetAnimationSect1().img_2.animation}
          transition={GetAnimationSect1().img_2.transition}
         >   
            <AImg2 />
    </motion.div>

   

    <motion.div 
         className='img_3'
         
         animate={GetAnimationSect1().img_3.animation}
          transition={GetAnimationSect1().img_3.transition}
         >  
            <AImg3 />
    </motion.div>

{/* 
     
        <TriggerBox 
        link="/hemp"
        hover={{hoverState,setHoveState}}
        projectOpen={{openState,setOpenState}}
        /> */}


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