import React, { useState } from 'react'
import './css/global.css'


const TriggerBox = (props) => {
    
const {currentComp , setCurrentComp, setOpenState,setClickedItself} = props.componentSwitch;
const [disabled,setDisable] = useState(false)

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
        if(!disabled){
        setDisable(true)
        props.navigation.setNav("HOME")
        props.projectOpen.setOpenState(!props.projectOpen.openState)
        props.hover.setHoveState(false)
        setClickedItself(false)
        setOpenState(true)
        setTimeout(()=>{
            setOpenState(false)
            window.scrollTo(0, 0)
            setDisable(false)
        },4000)
        setTimeout(()=>{
            setCurrentComp(props.projectSet);
        },3500)

        }
        

       
       
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