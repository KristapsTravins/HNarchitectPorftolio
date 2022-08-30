import React from 'react'
import "./css/global.css"
import "./css/view.css"
import { motion } from "framer-motion"
import { BImg1,BImg2,BImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'



import { ProjectHover,ProjectOpenClose } from '../hooks/ProjectHook'


const ProjectHut = (props) => {

const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();

  return (
    <motion.div 
    className='project_hut_outer'
    style={{"height":"645px"}}

  

    >
      
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}
    />
    <ProjectTitle
    title={["HEMP","HUT"]}
      />
   
    <TriggerBox 
    hover={{hoverState,setHoveState}}
    projectOpen={{openState,setOpenState}}
    />


    </motion.div>
  )
}

export default ProjectHut