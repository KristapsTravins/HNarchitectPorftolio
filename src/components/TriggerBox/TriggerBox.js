import React from 'react'
import './css/global.css'


const TriggerBox = (props) => {

    console.log(props.hover.hoverState)

  return (
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
    >{props.hover.hoverState.toString()} / {props.projectOpen.openState.toString()}</div>
  )
}

export default TriggerBox