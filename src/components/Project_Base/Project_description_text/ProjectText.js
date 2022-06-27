import React from 'react'
import { motion } from "framer-motion"
import './css/mobile.css'
import './css/global.css'
import './css/tab.css'
import parse from 'html-react-parser';


function ProjectText(props) {
 

  return (
   <motion.div
   animate={props.ProjectDescription_Position}
   transition={{duration:1}}
   style={props.text_intial_pos}
   className='project_description_block'
   >
   <div className='inner_description_text' style={props.text_add_style}>
    {parse(props.project_text)}
   </div> 


   </motion.div>
  )
}

export default ProjectText

