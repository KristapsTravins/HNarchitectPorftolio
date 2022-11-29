import React from 'react'
import "./scss/animations.scss"
import "./scss/main.scss"
import "./scss/view.scss"

import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import { motion } from "framer-motion"
import { CImg6,CImg5,CImg3  } from '../../../assets/images/ImageComponents'
import ProjectDescription from '../../Project_title_description/ProjectDescription'





const ProjectAnna = (props) => {
  
  return (
    <div className='project_ann_outer'>
    
    <ProjectTitle
    animationClosed={true}
    title={["ANNAS"]}
    />
  
  <motion.div className='img_1'>   
           <CImg5 />
    </motion.div>

  <motion.div className='img_2'>   
           <CImg6 />
    </motion.div>
 
  <motion.div className='img_3'>   
           <CImg3 />
    </motion.div>
   
  <ProjectDescription 
    titleDescription={["Family home","Construction","2022","Atacoma Desert","195 sq.m."]}
    animationClosed={true}
    />

    </div>
  )
}

export default ProjectAnna