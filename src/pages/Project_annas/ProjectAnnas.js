import React from 'react'
import { motion } from "framer-motion"


import { CImg1,CImg2,CImg3,CImg4,CImg5,CImg6} from '../../assets/images/ImageComponents'
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle'
import ProjectDescription from '../../components/Project_title_description/ProjectDescription'
import ProjectTextDescription from '../../components/Project_description/ProjectTextDescription'


import './css/main.css'
import './css/view.css'

const text1 = "<p>A single family home for <span>young couple and two kids.</span> The thask was to create an simple yet personal and warm home, with a motorbike hobyshop garrage.</p>";
const text2 = "<p>Requested room programm was divided into <span>two blocks</span> - one for the fammaly the other for the bikes. Both blocks ar conected wit an <span>glazed</span> eantrance that opens up upon an <span>inner stone garden.</span></p>"

const ProjectAnnasExp = () => {
  return (
    <div className='annas_exp_outer'>
        <div className='annas_exp_inner'>

        <ProjectTitle title={["ANNAS"]} 
          animationClosed={false}
          UpperAnimation={{
              width:"100%",
              opacity:1,
            }}
            LowerAnimation={{
              width:"100%",
              opacity:1,
              marginLeft:"50px"
            
            }}/>

        <ProjectDescription 
         titleDescription={['Family home',"Construction","2022","Latvia","195 sq.m."]} 
         animationClosed={false} />

        <motion.div className='img_1'>
                <CImg5 />   
        </motion.div>
        <motion.div className='img_2'>
                <CImg4 />   
        </motion.div>
         <motion.div className='img_3'>
                <CImg6 />   
        </motion.div>
        <motion.div className='img_4'>
                <CImg3 />   
        </motion.div>
        <motion.div className='img_5'>
                <CImg2 />   
        </motion.div>
        <motion.div className='img_6'>
                <CImg1 />   
        </motion.div>

        <ProjectTextDescription text={text1} textClass={"text_description_1"} />
        <ProjectTextDescription text={text2} textClass={"text_description_2"} />

        </div>
    </div>
  )
}

export default ProjectAnnasExp