import React from 'react';
import '../css/main.css';
import '../css/menu_btn.css';

export const  MenuBtn=(props)=> {
  return (
    <div className={`menuButton ${props.menuState?'menuPressed':''}`} onClick={()=>props.closeMenu()} >

    </div>
  )
}


