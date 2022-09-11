import React,{useEffect} from 'react'
import "./css/global.css"
import "./css/view.css"

import { motion } from "framer-motion"
import { BImg1,BImg2,BImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'
import { useInView } from 'react-intersection-observer';



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
    UpperAnimation={{
      width:"100%",
      opacity:1,
      marginLeft:"70px"
     }}
    LowerAnimation={{
      width:"100%",
      opacity:1,
     
     }}
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
 
         animate={{
          x:35,
          opacity:1
         }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1.5 }}
         >   
           <BImg3 />
    </motion.div>:<></>
}

  {view?<TriggerBox 
      link="/cloud"
      hover={{hoverState,setHoveState}}
      projectOpen={{openState,setOpenState}}
      />:<></>
  }
    
    

    </motion.div>
  )
}

export default ProjectCrater