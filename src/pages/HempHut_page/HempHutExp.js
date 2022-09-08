import React from 'react'
import { motion } from "framer-motion"

import "./css/global.css"
import "./css/view.css"

import { AImg1,AImg2,AImg3, AImg4, AImg5  } from '../../assets/images/ImageComponents'
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle"
import ProjectDescription from '../../components/Project_title_description/ProjectDescription'
import ProjectTextDescription from '../../components/Project_description/ProjectTextDescription'


const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>";
const text2 = "<p>Regarding the material usage, high focus is placed on <span> renewables, carbon neutral and long lasting materials.</span><br><br>  <span> Wood </span> was used for the load bearing constructins, as well indor and outdoor wall finishes,<br><br>  <span> Hemp </span> products are used for insulation and sealing.</p>";


const HempHutExp = () => {
  return (
    <div className='hemp_hut_outer'>
        <div className='hemp_hut_inner'>        
        <motion.div className='img_1'>
            <AImg2 />   
        </motion.div>  
            
        <motion.div className='img_2'>
            <AImg1 />   
        </motion.div> 
        <motion.div className='img_3'>
            <AImg4 />   
        </motion.div>  
        <motion.div className='img_4'>
            <AImg3 />   
        </motion.div>
        <motion.div className='img_5'>
            <AImg5 />   
        </motion.div>  

 
        <ProjectTitle title={["HEMP","HUT"]} 
        animationClosed={false}
        UpperAnimation={{
            width:"100%",
            opacity:1,
           }}
          LowerAnimation={{
            width:"100%",
            opacity:1,
            marginLeft:"50px"
           
           }}
        />
        <ProjectDescription titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]} animationClosed={false}  /> 
        <ProjectTextDescription text={text1} textClass={"text_description"} />
        <ProjectTextDescription text={text2} textClass={"text_description_2"} />

       




        </div>
    </div>
  )
}

export default HempHutExp