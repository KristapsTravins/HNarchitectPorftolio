import React from 'react'
import '../css/menu.css';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";

function MenuOverlay(props) {
  return (
    <div className={`menu-overlay ${props.menuState}`}>
        <div className='center-menu'>
            <div className='menu-list'>
                <ul>
                  <li onClick={()=>props.closeMenu()}><Link to="/">HOME</Link></li>
                  <li onClick={()=>props.closeMenu()}><Link to="/projects">PROJECTS</Link></li>
                  <li onClick={()=>props.closeMenu()}><Link to="/design">DESIGN</Link></li>
                  <li onClick={()=>props.closeMenu()}><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </div>
        <Footer />
    </div> 
  )
}

export default MenuOverlay