import React from 'react'
import '../css/menu.css';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";

function MenuOverlay(props) {
  return (
    <div className={`menu-overlay ${props.menuState}`}>
        <div className='center-menu'>
         
        </div>
        <Footer />
    </div> 
  )
}

export default MenuOverlay