import React from 'react'
import { Link } from "react-router-dom";
import './css/global.css'


const TriggerBox = (props) => {


  return (
    <Link to={props.link}>
    <div 
    className='trigger'
    onMouseEnter={()=>{
        if(!props.hover.hoverState){
            props.hover.setHoveState(true)
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

    }}
    style={{
        width:props.width,
        height:props.height,
        top:props.top,
        left:props.left
    }}
    ></div>
    </Link>
  )
}

export default TriggerBox