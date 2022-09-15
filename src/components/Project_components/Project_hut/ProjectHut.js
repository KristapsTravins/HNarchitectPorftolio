import React,{useRef,useEffect, useState} from 'react'
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
const {openState,setOpenState} = ProjectOpenClose();
const [wasHover, setWasHover] = useState(false);
const [showTrigger,setTrigerShow]=useState(false);


setTimeout(() => {
  setTrigerShow(true)
},6000);


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

          animate={openState?GetAnimationSect1().img_1.open_Sequence:hoverState?GetAnimationSect1().img_1.hover:GetAnimationSect1().img_1.animation}
          transition={!wasHover?GetAnimationSect1().img_1.transition:openState?GetAnimationSect1().img_1.open_Sequence_Transition:GetAnimationSect1().img_1.hover_transition}
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
         
          animate={openState?GetAnimationSect1().img_3.open_Sequence:hoverState?GetAnimationSect1().img_3.hover:GetAnimationSect1().img_3.animation}
          transition={!wasHover?GetAnimationSect1().img_3.transition:openState?GetAnimationSect1().img_3.open_Sequence_Transition:GetAnimationSect1().img_3.hover_transition}
         >  
            <AImg3 />
    </motion.div>


      
       {showTrigger? <TriggerBox 
        componentSwitch={props.ComponentSw}
        hover={{hoverState,setHoveState}}
        wasHover={setWasHover}
        projectOpen={{openState,setOpenState}}
        />:<></>} 


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

/* right:50,top:377 */