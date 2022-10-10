import React, { useEffect,useState } from 'react'

import "./css/main.css"
import "./css/view.css"

import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import { motion } from "framer-motion"
import { CImg6,CImg5,CImg3  } from '../../../assets/images/ImageComponents'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import TriggerBox from '../../TriggerBox/TriggerBox'
import { ProjectHover,ProjectOpenClose,IsInView} from '../hooks/ProjectHook'
import { useInView } from 'react-intersection-observer';
import { GetAnimationSect3 } from '../animation_data/GetAnimationVals/GetAnimationVals'




const ProjectAnna = (props) => {

  const {hoverState,setHoveState} = ProjectHover();
  const {openState,setOpenState} = ProjectOpenClose();
  const [wasHover, setWasHover] = useState(false);
  const [showTrigger,setTrigerShow]=useState(false);
  const { ref, inView } = useInView();
  const {view,setview} = IsInView();

const appearInView = () =>{
  inView?setview(true):<></>
}


useEffect(()=>{
  appearInView()
},[inView])


  const animationData = GetAnimationSect3();
  
  return (
    <div
    className='project_ann_outer'
    ref={ref}
    inView={inView}
    >
    
    {view?<ProjectTitle
    animationClosed={true}
    title={["ANNAS"]}
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
           <CImg5 />
    </motion.div>:<></>}

  {view?<motion.div 
         className='img_2'

         animate={openState?animationData.img_2.open_Sequence:hoverState?animationData.img_2.hover:animationData.img_2.animation}
         transition={!wasHover?animationData.img_2.transition:openState?animationData.img_2.open_Sequence_Transition:animationData.img_2.hover_transition}
        
         >   
           <CImg6 />
    </motion.div>:<></>}
 
  {view?<motion.div 
         className='img_3'
         animate={openState?animationData.img_3.open_Sequence:hoverState?animationData.img_3.hover:animationData.img_3.animation}
         transition={!wasHover?animationData.img_3.transition:openState?animationData.img_3.open_Sequence_Transition:animationData.img_3.hover_transition}
         >   
           <CImg3 />
    </motion.div>:<></>}
   
   {view?<ProjectDescription 
    titleDescription={["Family home","Construction","2022","Atacoma Desert","195 sq.m."]}
    DescriptionTransition={animationData.descritpion.transition}
    animationClosed={true}
    />:<></>}

{view?<TriggerBox 
     componentSwitch={props.ComponentSw}
     hover={{hoverState,setHoveState}}
     wasHover={setWasHover}
     projectOpen={{openState,setOpenState}}
     projectSet={"ann"}
     navigation={props.navigation} 
    />:<></>}

    </div>
  )
}

export default ProjectAnna