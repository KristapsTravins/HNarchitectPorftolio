import React from 'react'

const Trigger = (props) => {
 
 
  return (
    <div 
    className='trigger_box'
    onMouseEnter={()=>props.hoverState.setIsHovered(true)}
    onMouseLeave={()=>props.hoverState.setIsHovered(false)}
    onClick={()=>{
      props.hoverState.setIsHovered(false)
    }}
    >

    </div>
  )
}

export default Trigger