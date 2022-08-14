import React from 'react'
import "./css/global.css"
import { motion } from "framer-motion"
import { AImg1,AImg2,AImg3  } from '../../../assets/images/ImageComponents'
import TriggerBox from '../../TriggerBox/TriggerBox'

const ProjectHut = (props) => {
  return (
    <div 
    className='project_hut_outer'
    style={{"height":"645px"}}
    >
    <motion.div 
         className='img_1'
         animate={{
            y:45,
            opacity:1
          }}
          transition={{ ease: "easeIn", duration: 1.4 }}
         >
            <AImg1 />   
    </motion.div>
          <TriggerBox width="590px" height="333px" top="133px" left="34px" />
    <motion.div 
         className='img_2'
         animate={{
           x:35,
           opacity:1
          }}
          transition={{ ease: "easeIn", duration: 1.4, delay:1 }}
         >   
            <AImg2 />
    </motion.div>

    <motion.div 
         className='img_3'
         animate={{
           x:55,
           opacity:1
          }}
          transition={{ ease: "easeIn", duration: 1.4, delay:2 }}
         >   
            <AImg3 />
    </motion.div>

    </div>
  )
}

export default ProjectHut