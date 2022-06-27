import React from 'react'
import { motion } from 'framer-motion'
import useWindowDimensions from '../../../assets/hooks/useWindowDimensions'
import './css/global.css'
import './css/desktop.css'
import './css/tab.css'
import './css/mobile.css'

const ProjectTitle = (props) => {


  return (
    <motion.div 
    className='proj_title_block'
    animate={props.titlePosition}
    style={props.add_style}
    >
      <div className='upper'>
          <h1><span>{props.title[0][0]}</span>{props.title[0].slice(1,props.title[0].length)}</h1>
      </div>
      <div className='lower'>
          <h1>{props.title[1]}</h1>
      </div>
    </motion.div>
  )
}

export default ProjectTitle