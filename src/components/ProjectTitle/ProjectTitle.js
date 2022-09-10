import React from 'react'
import { motion } from 'framer-motion'
import './css/global.css'
import './css/desktop.css'
import './css/tab.css'
import './css/mobile.css'

const ProjectTitle = (props) => {

  return (
    <motion.div 
    className='proj_title_block'

    animate={props.ExpandState?props.OpenPos:{}}
    transition={props.animation?{duration:1.3,delay:1}:{duration:1,delay:0}}

    >
      <motion.div 
      className='upper'
      animate={props.UpperAnimation}
      transition={props.animationClosed?{ duration: 1.8, delay:3 }:{duration: 1, delay:0}}
      >
          <h1><span>{props.title[0][0]}</span>{props.title[0].slice(1,props.title[0].length)}</h1>
      </motion.div>
      <motion.div 
      className='lower'
      animate={props.LowerAnimation}
      transition={props.animationClosed?{duration: 1.8, delay:3 }:{duration: 1, delay:0 }}
      >
          <h1>{props.title[1]}</h1>
      </motion.div>
    </motion.div>
  )
}

export default ProjectTitle