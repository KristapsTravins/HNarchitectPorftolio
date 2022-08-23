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
    transition={{duration:1.3,delay:1}}

    >
      <motion.div 
      className='upper'
      animate={{
        width:"100%",
        opacity:1
       }}
      transition={{ duration: 1.8, delay:3 }}
      >
          <h1><span>{props.title[0][0]}</span>{props.title[0].slice(1,props.title[0].length)}</h1>
      </motion.div>
      <motion.div 
      className='lower'
      animate={props.ExpandState?props.bottomAnim:{width:"100%",
       opacity:1,
       marginLeft:"50px"}}
      transition={{ duration: 1.8, delay:3 }}
      >
          <h1>{props.title[1]}</h1>
      </motion.div>
    </motion.div>
  )
}

export default ProjectTitle