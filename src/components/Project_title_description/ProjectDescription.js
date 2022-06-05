import React from 'react'
import "./css/global.css"
import { motion } from "framer-motion"

 const ProjectDescription =(props)=> {
let counter =1.5;
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
                    transition={{duration:1.2,delay:counter++}}
                    >{p}</motion.div>
                 
                  <div className='right'>]</div>
               </div>
              )
   
            })}
</motion.div>
  )
}

export default ProjectDescription