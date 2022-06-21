import React from 'react'
import "./css/global.css"
import "./css/tab.css"
import "./css/desktop.css"
import { motion } from "framer-motion"

 const ProjectDescription =(props)=> {
const counters = [1.1,1.5,1.7,1.9,2.1,2.3]
let i = 0;
return (

<motion.div
          className='huts_title_info'
          initial={{height:"0%"}}
          animate={{height:"auto",...props.titleDescriptionPosition}} 
          transition={{duration:0.7}}
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
