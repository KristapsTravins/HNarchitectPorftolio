import React from 'react'
import { Link } from "react-router-dom";
import './css/global.css'


const TriggerBox = (props) => {
    
const {currentComp , setCurrentComp, setOpenState,setClickedItself} = props.componentSwitch;


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
        setClickedItself(false)
        setOpenState(true)
        setTimeout(()=>{
            setOpenState(false)
        },4000)
        setTimeout(()=>{
            setCurrentComp(props.projectSet);
        },3500)

       
       
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