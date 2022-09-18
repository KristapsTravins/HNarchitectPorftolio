import React,{useEffect,useState} from 'react'
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
const {openState,setOpenState} = ProjectOpenClose();
const [wasHover, setWasHover] = useState(false);
const [showTrigger,setTrigerShow]=useState(false);
const { ref, inView } = useInView();
const {view,setview} = IsInView();

const appearInView = () =>{

  if(inView){
    setview(true);
    setTimeout(() => {
      setTrigerShow(true)
    },6000);
  }
}

useEffect(()=>{
  appearInView()
},[inView])


console.log(hoverState)

const animationData = GetAnimationSect2();
console.log(animationData.img_1.hover)

  return (
    <motion.div 
    className='project_clound_outer'
    ref={ref}
    inView={inView}
    >
   

   {view?<ProjectDescription 
   titleDescription={['Tiny House',"Concept","2022","Atacoma Desert","25 sq.m."]} 
   DescriptionTransition={animationData.descritpion.transition}
   
   />:<></>}

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
          animate={openState?animationData.img_1.open_Sequence:hoverState?animationData.img_1.hover:animationData.img_1.animation}
          transition={!wasHover?animationData.img_1.transition:openState?animationData.img_1.open_Sequence_Transition:animationData.img_1.hover_transition}
         >   
           <BImg1 />
    </motion.div>:<></>}
  
  {view?<motion.div 
         className='img_2'
 
         animate={animationData.img_2.animation}
          transition={animationData.img_2.transition}
         >   
           <BImg2 />
    </motion.div>:<></>}
    
  {view?<motion.div 
         className='img_3'
 
          animate={openState?animationData.img_3.open_Sequence:hoverState?animationData.img_3.hover:animationData.img_3.animation}
          transition={!wasHover?animationData.img_3.transition:openState?animationData.img_3.open_Sequence_Transition:animationData.img_3.hover_transition}
         >   
           <BImg3 />
    </motion.div>:<></>
}
{showTrigger? <TriggerBox 
        componentSwitch={props.ComponentSw}
        hover={{hoverState,setHoveState}}
        wasHover={setWasHover}
        projectOpen={{openState,setOpenState}}
        />:<></>} 

    
   
    </motion.div>
  )
}

export default ProjectCrater