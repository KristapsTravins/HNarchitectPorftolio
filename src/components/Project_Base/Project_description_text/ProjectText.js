import React from 'react'
import { motion } from "framer-motion"
import './css/mobile.css'
import './css/global.css'
import './css/tab.css'
import parse from 'html-react-parser';


function ProjectText(props) {
 

  return (
   <motion.div
   animate={props.ProjectDescription_1Position}
   className='project_description_block'
   >
   <div className='inner_description_text'>
    {parse(props.project_text)}
   </div> 


   </motion.div>
  )
}

export default ProjectText

