import React from 'react'
import './css/global.css'
import { ProjectHover } from '../Project_components/hooks/ProjectHook'

const TriggerBox = (props) => {


const {hoverState,setHoveState} = ProjectHover();


  return (
    <div 
    className='trigger'
    onMouseEnter={()=>{
        setHoveState(true)
        console.log(hoverState)
    }}
    onMouseLeave={()=>{
        setHoveState(false)
        console.log(hoverState)
    }}
    style={{
        width:props.width,
        height:props.height,
        top:props.top,
        left:props.left
    }}
    >{hoverState.toString()}</div>
  )
}

export default TriggerBox