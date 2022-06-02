import React, { useState } from 'react';
import { motion } from "framer-motion"
import "./css/global.css";


function ContentFisrt(props) {
  const [stateOfexp,setExp]=useState(false);
  const anim = {height:"2351px"};
  return (
    <motion.div className='content_main'
      onClick={()=>setExp(!stateOfexp)}
      animate={stateOfexp?anim:{}}
      transition={{duration: 3 }}>
        <div className='content_inner'>
          
        </div>
    </motion.div>
  )
}


export default ContentFisrt
