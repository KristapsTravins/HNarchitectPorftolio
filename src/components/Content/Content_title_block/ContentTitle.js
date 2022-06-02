import React from 'react'
import "./css/global.css";
import "./css/mobile.css";
import useWindowDimensions from './hooks/WindowDimensions';
import { motion } from "framer-motion"

 export const ContentTitle=(props)=> {
   
  const width = useWindowDimensions().width;
  return (
    <motion.div className='content_title_block'
    animate={props.expansionState?{opacity:0}:{}}
    transition={{duration:2}}
    >
       <div className='title_block'>
       <h5><span>H</span>EMP HUT</h5>
       </div>
       <div className='description_block'>
        {width>800?<WideScreen/>:<SmallScreen/>}
       </div>
    </motion.div>
  )
}

const WideScreen = () =>{
  return(
    <ul>
    <li>- MODULAR PREFAB HOSSING </li>
    <li>- CONCEPT</li>
    <li>- RIGA , LATVIA</li>
    <li>- 2021 </li>
    </ul> 
  )
}
const SmallScreen = () =>{
  return(<p>MODULAR PREFAB HOSSING / CONCEPT / RIGA , LATVIA / 2021</p>)
}

export default ContentTitle