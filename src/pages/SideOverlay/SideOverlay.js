import React from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from './hooks/WindowDimensions'
import Footer from '../../components/Footer/Footer'
import { About } from '../../components/About/About'
import "./css/slideOverlay.css"

function SideOverlay(props) {
  const {width} = useWindowDimensions();
  const slideIn={
    left:0,
    transition:{duration:3}
  };
  const slideOut={
      left:width,
      transition:{duration:3}
  } 
  return (
    <motion.div
    className="content_overlay"
    animate={props.openState?slideIn:slideOut}>
     <div className='center'>
     <About />
     </div>
  
    </motion.div>
  )
}

export default SideOverlay
