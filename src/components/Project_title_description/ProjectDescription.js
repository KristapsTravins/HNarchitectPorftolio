import React from 'react'
import "./css/global.css"
import "./css/tab.css"
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
                    initial={{width:"0px"}}
                    animate={{width:"auto"}}
                    transition={{duration:0.7,delay:counters[i++]}}
                    >{p}</motion.div>
                  <div className='right'>]</div>
               </div>
              )
   
            })}
</motion.div>
  )
}

export default ProjectDescription