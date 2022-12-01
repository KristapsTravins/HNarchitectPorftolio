import React from 'react'

const Trigger = (props) => {
 

  return (
    <div 
    className='trigger_box'
    onMouseEnter={()=>props.hoverState.setIsHovered(true)}
    onMouseLeave={()=>props.hoverState.setIsHovered(false)}
    onClick={()=>{
      props.openPage(props.page)
      props.hoverState.setIsHovered(false)

      props.slider.setSliderState(true)
      /* setTimeout(()=>{

      },1000) */
     
    }}
    >

    </div>
  )
}

export default Trigger