import React from 'react'
import { motion,AnimatePresence } from "framer-motion"
import { About } from '../../components/About/About'
import "./css/slideOverlay.css"


function SideOverlay(props) {

  const slideIn={
    left:0,
    transition:{duration:3}
  };
  const slideOut={
      left:"101%",
      transition:{duration:3}
  } 
  
  return (
  <AnimatePresence>
      {props.openState&&(
        <motion.div
          className="content_overlay"
          initial={slideOut}
          animate={slideIn}
          exit={slideOut}
          transition={{duration:3}}
        >
          <div className='center'>
              {props.aboutShow?<About />:<></>}
          </div>
        </motion.div>)}
  </AnimatePresence>
  )
}

export default SideOverlay