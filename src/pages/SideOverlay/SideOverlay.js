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
          className={`content_overlay`}
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



/* [<AnimatePresence>
  {!props.oc&&(
  <motion.span
  initial={{ width:"0px" }}
  animate={{ width:"40px" }}
  exit={{ width:"0px" }}
  transition={{duration:2}}
  >
  {props.currentPage==="/"?"ABOUT":"HOME"}
  </motion.span>)}
  </AnimatePresence>]  
 */


  /* 
  
   <motion.div
    className={`content_overlay`}
    animate={props.openState?slideIn:slideOut}>
     <div className='center'>
      {props.aboutShow?<About />:<></>}
     </div>
  
    </motion.div>
  
  */