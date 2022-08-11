import React from 'react'
import "./css/global.css"
import "./css/tab.css"
import "./css/desktop.css"
import { motion } from "framer-motion"

 const ProjectDescription =(props)=> {
const counters = [3.1,3.5,3.7,3.9,4.1,4.3]
let i = 0;
return (

<motion.div
          className='huts_title_info'
          style={props.titleDescriptionPositionInit}
          initial={{height:"0%"}}
          animate={{height:"auto",...props.titleDescriptionPosition}} 
          transition={{duration:0.7,delay:2.6}}
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
