import React from 'react'
import './css/global.css'
import { motion } from "framer-motion"
import {Img4} from '../../../../assets/images/ImageComponents';
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
      transition={{duration:1.3,delay:1}}
      >
          <Img4 />
      </motion.div>
    )
  }
