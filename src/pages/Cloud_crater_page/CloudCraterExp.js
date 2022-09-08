import React from 'react'
import { motion } from "framer-motion"



import { BImg1,BImg2,BImg3,BImg4,BImg5,BImg6,BImg7,BImg8,BImg9  } from '../../assets/images/ImageComponents'
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle'
import ProjectDescription from '../../components/Project_title_description/ProjectDescription'
import ProjectTextDescription from '../../components/Project_description/ProjectTextDescription'

import './css/main.css'
import './css/view.css'

const text1 = "<p>Cloud Catcher aims to address the ever rising <span>global water crisis.</span> It is estimated that <span>2.7 billion people worldwide suffer due to water scarcity.</span> Some of the affected regions don't get any rainfall for months or even years, most of the precipitation simply stays in the air, but <span>there also lies an opportunity to collect drinking water out of thin air</span> using biomimicry.</p>"

const text2 = "The whole facade is covered in <span>recycled polyethylene mesh</span> which <span>catches</span> the air embodied <span>water</span> as <span>condensation</span>. Further it is stored in transparent <span>water-wall</span> tanks. This solution saves space, creates a lot of backup water storage and functions as a <span>thermal regulator</span>, thanks to water's large thermal storage capacity."

const text3="Interior layout concept is to  create <span>flexible spaces</span>. Movable modules providing everyday functional needs and allowing for <span>control of spatial division</span>."

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

            <motion.div className='img_2'>
                <BImg1 />   
            </motion.div>
            <motion.div className='img_3'>
                <BImg7 />   
            </motion.div>
            <motion.div className='img_4'>
                <BImg8 />   
            </motion.div>
            <motion.div className='img_5'>
                <BImg4 />   
            </motion.div>

            <ProjectTextDescription text={text3} textClass={"text_description_3"} />
            <ProjectTextDescription text={text2} textClass={"text_description_2"} />
            <ProjectTextDescription text={text1} textClass={"text_description_1"} />



        </div>
    </div>
  )
}

export default CloudCraterExp