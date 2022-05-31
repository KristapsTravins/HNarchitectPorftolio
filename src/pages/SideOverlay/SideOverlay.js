import React from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from './hooks/WindowDimensions'
import Footer from '../../components/Footer/Footer'
import "./css/slideOverlay.css"

function SideOverlay(props) {
  const {width} = useWindowDimensions();
  console.log(width);
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
    className='content_overlay'
    animate={props.openState?slideIn:slideOut}>
      <div className='overlay_center'>
          <Footer/>
      </div>
    </motion.div>
  )
}

export default SideOverlay
