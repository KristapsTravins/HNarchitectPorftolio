import "./css/global.css";
import "./css/mobile.css";

import React, { useState } from 'react';
import { motion } from "framer-motion"
import {Img1, Img2, Img3} from '../../../assets/images/ImageComponents';
import ContentTitle from '../Content_title_block/ContentTitle';
import { ExpImage4, ExpTitle } from "./ExpandContent/ExpandContent";


function ContentFisrt(props) {
  const [stateOfExpansion,setExpansion]=useState(false);
  const [stateOfHover,setStateOfHover]=useState(false);
  const [hasBeenPressed,setPressed]=useState(false);

  const anim = {height:"2351px"};
  return (
    <motion.div className='content_main'
      onClick={()=>{
        setExpansion(!stateOfExpansion)
        setPressed(true)
      }}
      animate={stateOfExpansion?anim:{}}
      transition={{duration: 3}}>
    
        <div className='content_inner'>
        <div className='hover_zone'
        onClick={()=>setStateOfHover(false)}
        onMouseEnter={()=>stateOfExpansion?"":setStateOfHover(true)}
        onMouseLeave={()=>stateOfExpansion?"":setStateOfHover(false)}
        ></div>
        

        {hasBeenPressed?< ExpTitle expansionState={stateOfExpansion} />:<></>}
        {hasBeenPressed?< ExpImage4 expansionState={stateOfExpansion} />:<></>}



          <motion.div 
          className='image1_block'
          animate={stateOfHover?{translateY:"-30px"}:""}
          transition={{duration:1.4}}
          >
          <Img1 />
          </motion.div>
          <motion.div 
          className='image2_block'
          animate={stateOfHover?{translateX:"-50px"}:stateOfExpansion?{width:"730px",height:"498px",translateX:"-71%"}:{}}
          transition={{duration:1.4}}
          ><Img2 />
          </motion.div>

          <motion.div 
          className='image3_block'
          animate={stateOfHover?{translateY:"18px"}:""}
          transition={{duration:1.4}}>
            <Img3 />
          </motion.div>


          <ContentTitle expansionState={stateOfExpansion}/>
        </div>
    </motion.div>
  )
}


export default ContentFisrt
