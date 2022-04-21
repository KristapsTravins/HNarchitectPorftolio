import React from 'react';
import '../css/main.css';
import '../css/menu_btn.css';
import '../css/animate.css'

export const  MenuBtn=(props)=> {
  return (
    <div className={`menuButton $`} onClick={()=>setTimeout(()=>{
      props.closeMenu()
    },1500)} >
     <div className={`inner_img ${props.menuState?'menuActive':'menuInactive'}`} ></div> 
    </div>
  )
}


