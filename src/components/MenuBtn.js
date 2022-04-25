import React,{useState} from 'react';
import '../css/main.css';
import '../css/menu_btn.css';
import '../css/animate.css'

export const  MenuBtn=(props)=> {



  return (
    <div className={`menuButton ${props.menuState?"Bouncein":"Bounceout"} `} onClick={()=>{
      setTimeout(()=>{
      props.closeMenu();
    },900);
    
  } 
    }>
     <div className={`inner_img ${props.menuState?'menuActive':'menuInactive'}`} ></div> 
    </div>
  )
}


