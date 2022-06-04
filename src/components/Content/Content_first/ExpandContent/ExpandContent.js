import React from 'react'
import './css/global.css'
import { motion } from "framer-motion"
import {Img4, Img5} from '../../../../assets/images/ImageComponents';
export const ExpTitle = (props) => {
  return (
    <motion.div
    className='expanded_title'
    animate={props.expansionState?{opacity:1}:{opacity:0}}
    transition={{duration:1.3}}
    >
    <h1>HEMP HUT</h1>
    </motion.div>
  )
}
export const ExpImage4 = (props) => {
    return (
      <motion.div
      className='expanded_img4'
      animate={props.expansionState?{opacity:1}:{opacity:0}}
      transition={props.expansionState?{duration:1.5,delay:1}:{duration:1,delay:0}}
      >
          <Img4 />
      </motion.div>
    )
  }
export const ExpImage5 = (props) => {
    return (
      <motion.div
      className='expanded_img5'
      animate={props.expansionState?{opacity:1}:{opacity:0}}
      transition={props.expansionState?{duration:1.5,delay:1}:{duration:0.1,delay:0}}
      >
          <Img5 />
      </motion.div>
    )
  }

export const ExpTextDescr = (props) =>{

  return(
    <motion.div
      animate={props.expansionState?{opacity:1}:{opacity:0}}
      transition={props.expansionState?{duration:1.5,delay:1}:{duration:1,delay:0}} 
      className={props.classNam}>
    <p>This is text of this paragraph  created  by me by us and you. 
This is text of this paragraph  created  by me by us and you. This is text of this paragraph  created  by me by us and you. This is text of this paragraph  created  by me by us and you. </p>
  </motion.div>
  )
}
