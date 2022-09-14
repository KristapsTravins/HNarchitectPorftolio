import React from 'react'
import { Link } from "react-router-dom";
import './css/global.css'


const TriggerBox = (props) => {
    
const {currentComp , setCurrentComp} = props.componentSwitch;

  return (
  
    <div 
    className='trigger'
    onMouseEnter={()=>{
        if(!props.hover.hoverState){
            props.hover.setHoveState(true)
            props.wasHover(true)
        }
    }}
    onMouseLeave={()=>{
        if(props.hover.hoverState){
            props.hover.setHoveState(false)
        }
    }}
    onClick={()=>{
        props.projectOpen.setOpenState(!props.projectOpen.openState)
        props.hover.setHoveState(false)
        setCurrentComp("a");
       
    }}
    style={{
        width:props.width,
        height:props.height,
        top:props.top,
        left:props.left
    }}
    ></div>

  )
}

export default TriggerBox