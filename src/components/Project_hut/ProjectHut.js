import React from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from '../../assets/hooks/useWindowDimensions'
import {AImg1,AImg2,AImg3,AImg4,AImg5} from "../../assets/images/ImageComponents"
import "./css/mobile.css"
import ProjectTitle from '../Project_title/ProjectTitle'

const ProjectHut =(props)=> {
  const { width } = useWindowDimensions();
  console.log(width)
  return (
    <motion.div className='project_huts_main'>
      <div className='project_huts_inner'>
        <div className='project_huts_trigger_box'></div>
          <ProjectTitle />
          <motion.div
            className='huts_img1'
            >
            <AImg2/>
          </motion.div>

          <motion.div
            className='huts_img2'
            >
            <AImg1/>
          </motion.div>

          <motion.div
            className='huts_img3'
            >
            <AImg3/>
          </motion.div>

          <motion.div
            className='huts_img4'
            >
            <AImg4/>
          </motion.div>

          <motion.div
            className='huts_img5'
            >
            <AImg5/>
          </motion.div>

      </div>
    </motion.div>
  )
}

export default ProjectHut