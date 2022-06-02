import React, { useState } from 'react';
import { motion } from "framer-motion"
import "./css/global.css";
import "./css/mobile.css";
import {Img1, Img2, Img3 } from '../../../assets/images/ImageComponents';
import ContentTitle from '../Content_title_block/ContentTitle';


function ContentFisrt(props) {
  const [stateOfexp,setExp]=useState(false);
  const anim = {height:"2351px"};
  return (
    <motion.div className='content_main'
      onClick={()=>setExp(!stateOfexp)}
      animate={stateOfexp?anim:{}}
      transition={{duration: 3 }}>
        <div className='content_inner'>
          <div className='image1_block'>
            <Img1 />
          </div>
          <div className='image2_block'>
            <Img2 />
          </div>
          <div className='image3_block'>
            <Img3 />
          </div>
          <ContentTitle />
        </div>
    </motion.div>
  )
}


export default ContentFisrt
