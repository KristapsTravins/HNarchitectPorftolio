import React from 'react'
import { motion } from "framer-motion"
import parse from 'html-react-parser';

import './css/global.css';
import './css/mobile.css';
import './css/tab.css';
import './css/desktop.css';


const OpenProjectDescription = (props) => {

  const text = parse( "Regarding the material usage, high focus is placed on <span>renewables, carbon neutral and long lasting materials.</span></br>  <span>Wood</span> was used for the load bearing constructins, as well indor and outdoor wall finishes.</br> <span>Hemp</span> products are used for insulation and sealing. ")

  return (
    <motion.div
    className='proj_description'
    animate={props.OpenProjectDesc}
    >
      <div
      className='proj_description_inner'
      
      >
        <p>{text}</p>
      </div>
        
    </motion.div>
  )
}

export default OpenProjectDescription