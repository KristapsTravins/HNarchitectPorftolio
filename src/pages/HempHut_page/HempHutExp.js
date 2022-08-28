import React from 'react'
import { motion } from "framer-motion"

import "./css/global.css"
import "./css/view.css"

import { AImg1,AImg2,AImg3, AImg4  } from '../../assets/images/ImageComponents'
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle"
import ProjectDescription from '../../components/Project_title_description/ProjectDescription'
import ProjectTextDescription from '../../components/Project_description/ProjectTextDescription'

const HempHutExp = () => {
  return (
    <div className='hemp_hut_outer'>
        <div className='hemp_hut_inner'>

        <ProjectTitle title={["HEMP","HUT"]}/>
        <ProjectDescription titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]} /> 

        <motion.div className='img_1'>
            <AImg2 />   
        </motion.div>  
            
        <motion.div className='img_2'>
            <AImg1 />   
        </motion.div>  
        
        <ProjectTextDescription textClass={"text_description"} />

        <motion.div className='img_3'>
            <AImg4 />   
        </motion.div>  






        </div>
    </div>
  )
}

export default HempHutExp