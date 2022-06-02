import React, { useState } from 'react';
import { motion } from "framer-motion"
import "./css/global.css";
import "./css/mobile.css";
import {Img1, Img2, Img3 } from '../../../assets/images/ImageComponents';
import ContentTitle from '../Content_title_block/ContentTitle';


function ContentFisrt(props) {
  const [stateOfExpansion,setExpansion]=useState(false);
  const [stateOfHover,setStateOfHover]=useState(false);

  const anim = {height:"2351px"};
  return (
    <motion.div className='content_main'
      onClick={()=>setExpansion(!stateOfExpansion)}
      animate={stateOfExpansion?anim:{}}
      transition={{duration: 3 }}>
    
        <div className='content_inner'>
        <div className='hover_zone'
        onMouseEnter={()=>setStateOfHover(true)}
        onMouseLeave={()=>setStateOfHover(false)}
        ></div>
          <motion.div 
          className='image1_block'
          animate={stateOfHover?{translateY:"-30px"}:""}
          transition={{duration:1.4}}
          >
            <Img1 />
          </motion.div>
          <motion.div 
          className='image2_block'
          animate={stateOfHover?{translateX:"-50px"}:""}
          transition={{duration:1.4}}
          ><Img2 />
          </motion.div>
          <motion.div 
          className='image3_block'
          animate={stateOfHover?{translateY:"20px"}:""}
          transition={{duration:1.4}} 
          >
            <Img3 />
          </motion.div>
          <ContentTitle />
        </div>
    </motion.div>
  )
}


export default ContentFisrt
