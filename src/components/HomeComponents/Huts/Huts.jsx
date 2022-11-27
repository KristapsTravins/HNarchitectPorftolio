import React from 'react'
import "./scss/animation.scss"
import "./scss/main.scss"
import "./scss/view.scss"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import Trigger from '../../TriggerBox/Trigger'
import ProjectTitle from '../../ProjectTitle/ProjectTitle'
import ProjectDescription from '../../Project_title_description/ProjectDescription'

const Hut = (props) => {



  return (
    <motion.div 
    className='project_hut_outer'>
    <motion.div className='img_1'>
            <AImg1 />   
    </motion.div>
 
    <motion.div className='img_2'>   
            <AImg2 />
    </motion.div>
    <motion.div 
         className='img_3'>  
            <AImg3 />
    </motion.div>
    <Trigger />
    <ProjectTitle 
    delay={3}
    title={["HEMP","HUT"]} />
    <ProjectDescription 
    titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]}
 
    />


    </motion.div>
  )
}

export default Hut