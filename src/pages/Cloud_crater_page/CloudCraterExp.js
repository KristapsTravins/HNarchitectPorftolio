import React from 'react'
import { motion } from "framer-motion"



import { BImg1,BImg2,BImg3,BImg4,BImg5,BImg6,BImg7  } from '../../assets/images/ImageComponents'
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle'
import ProjectDescription from '../../components/Project_title_description/ProjectDescription'

import './css/main.css'
import './css/view.css'


const CloudCraterExp = () => {
  return (
    <div className='cloud_crater_exp_outer'>
        <div className='cloud_crater_exp_inner'>


            <ProjectTitle title={["CLOUND","CATHER"]} 
                animationClosed={false}
                UpperAnimation={{
                    width:"100%",
                    opacity:1,
                    marginLeft:"105px"
                }}
                LowerAnimation={{
                    width:"100%",
                    opacity:1
                }}
            />
            <ProjectDescription 
                titleDescription={['Tiny House',"Concept","2022","Atacoma Desert","25 sq.m."]}
                animationClosed={true}
            />
            

            <motion.div className='img_1'>
            <BImg2 />   
            </motion.div>  




        </div>
    </div>
  )
}

export default CloudCraterExp