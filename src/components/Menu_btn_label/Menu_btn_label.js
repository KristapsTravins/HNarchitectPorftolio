import { render } from "@testing-library/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react";
import "./css/global.css"


function Menubtnlabel(props) {
  
  const [initialChange,setChange] = useState(true);
  const [navPlace,setNavPlace] =useState("ABOUT")
  const trigger =() => {
      setChange(false)
      setTimeout(()=>{
        setNavPlace(props.navigation)
        setChange(true)
      },4000)
  }

useEffect(()=>{
  trigger();
},[props.oc])

  return(
    <h1 className={props.class} >
        [<LabelBase onOff={initialChange} place={navPlace} />]
    </h1>
  )
}

export default Menubtnlabel

const LabelBase = (props) =>{

  return (
    <AnimatePresence>
    {props.onOff&&(
    <motion.span
    initial={{ width:"0px" }}
    animate={{ width:"40px" }}
    exit={{ width:"0px" }}
    transition={{duration:2}}
    >
     {props.place}
    </motion.span>)}
    </AnimatePresence>
  )

}
















/* !props.oc || props.Component.isClickedItself */


/* return (
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
) */