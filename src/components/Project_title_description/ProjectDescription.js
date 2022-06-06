import React from 'react'
import "./css/global.css"
import "./css/tab.css"
import "./css/desktop.css"
import { motion } from "framer-motion"

 const ProjectDescription =(props)=> {
const counters = [0.1,0.4,0.5,0.7,0.9,1]
let i = 0;
return (
<motion.div
          className='huts_title_info'
          >
            {props.titleDescription.map((p)=>{
            
              return(
               <div className='list_item'>
                  <div className='left'>[ </div>
                    <motion.div className='data'
                    transition={{duration:0.7,delay:counters[i++]}}
                    initial={{width:"0%"}}
                    animate={{width:"auto"}} 
                    >{p}</motion.div>
                  <div className='right'>]</div>
               </div>
              )
   
            })}
</motion.div>
  )
}

export default ProjectDescription
/* 
initial={{width:"0%"}}
animate={{width:"auto"}} */