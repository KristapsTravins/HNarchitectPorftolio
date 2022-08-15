import React from 'react'
import './css/global.css'
import { ProjectHover,ProjectOpenClose } from '../Project_components/hooks/ProjectHook'

const TriggerBox = (props) => {


const {hoverState,setHoveState} = ProjectHover();
const  {openState,setOpenState} = ProjectOpenClose();

  return (
    <div 
    className='trigger'
    onMouseEnter={()=>{
        if(!openState){
            setHoveState(true)
        }
    }}
    onMouseLeave={()=>{
        if(!openState){
            setHoveState(false)
        }
    }}
    onClick={()=>{
        setOpenState(!openState)
        setHoveState(false)

    }}
    style={{
        width:props.width,
        height:props.height,
        top:props.top,
        left:props.left
    }}
    >{hoverState.toString()} / {openState.toString()}</div>
  )
}

export default TriggerBox