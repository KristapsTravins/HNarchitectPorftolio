import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";
import "./css/global.css"


function Menubtnlabel(props) {
    
    


  return (
    <h1 className={props.class} >
           [<AnimatePresence>
            {!props.oc&&(
            <motion.span
            initial={{ width:"0px" }}
            animate={{ width:"40px" }}
            exit={{ width:"0px" }}
            transition={{duration:2}}
            >
            {props.currentPage==="/" && !props.about ?"ABOUT":"HOME"}
            </motion.span>)}
            </AnimatePresence>
        ]  
    </h1>
  )
}

export default Menubtnlabel

/* !props.oc || props.Component.isClickedItself */
