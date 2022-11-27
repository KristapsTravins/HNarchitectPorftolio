import React from 'react'
import { motion } from 'framer-motion'
import './scss/global.scss'


const ProjectTitle = (props) => {


  return (
    <motion.div 
    className='proj_title_block'
   
    >
      <motion.div 
      className='upper'
      >
          <h1><span>{props.title[0][0]}</span>{props.title[0].slice(1,props.title[0].length)}</h1>
      </motion.div>
      <motion.div 
      className='lower'
      >
          <h1>{props.title[1]}</h1>
      </motion.div>
    </motion.div>
  )
}

export default ProjectTitle