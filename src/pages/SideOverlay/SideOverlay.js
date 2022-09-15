import React from 'react'
import { motion } from "framer-motion"
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
    <motion.div
    className={`content_overlay`}
    animate={props.openState?slideIn:slideOut}>
     <div className='center'>
      {props.aboutShow?<About />:<></>}
     {/* <About /> */}
     </div>
  
    </motion.div>
  )
}

export default SideOverlay
