import React from 'react'

import { motion,AnimatePresence } from 'framer-motion';
import "./scss/lblmain.scss"

const BtnLabel = (props) => {

  return (
    <div className={`label_outer ${props.sliderState?"lbl_open":"lbl_closed"} ${props.sliderState?"close_seq_text":"open_seq_text"}`}>
       <span>
          [
       </span>
       <AnimatePresence>
        {props.btnStatus&&(
      <motion.div className='label_inner'
        initial={{ width:"0px" }}
        animate={{ width:"40px" }}
        exit={{ width:"0px" }}
        transition={{duration:2}}
      > 
        <span>{props.sliderState?"HOME":"ABOUT"}</span>
      </motion.div>)}
      </AnimatePresence>

     
      <span>
          ]
      </span>
    </div>
  )
}

export default BtnLabel