import React from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from './hooks/WindowDimensions'
import Footer from '../../components/Footer/Footer'
import "./css/slideOverlay.css"
import { About } from '../../components/About/About'

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
    id={`${props.openState?"":"left"}`}
    animate={props.openState?slideIn:slideOut}>
      <div className='overlay_center'>
          <About/>
          <Footer/>
      </div>
    </motion.div>
  )
}

export default SideOverlay
