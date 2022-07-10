import React from 'react'
import './css/main.css';



const TrigerBox  = (props) =>{

  return (
    <div 
    onMouseEnter={()=>{
   !props.OpenCloseState?props.HoverStateChange(true):props.HoverStateChange(false) 

    }}
    onMouseLeave={()=>{props.HoverStateChange(false)}}
    onClick={() => {
    props.OpenCloseTrigger(!props.OpenCloseState)
    props.HoverStateChange(false)
    } }
    className='trigger_box'></div>
  )
}

export default TrigerBox