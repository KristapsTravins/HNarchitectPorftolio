import React from 'react'
import '../css/menu.css';
import Footer from '../components/Footer';

function MenuOverlay(props) {
  return (
    <div className={`menu-overlay ${props.menuState}`}>
        <div className='center-menu'>
            <div className='menu-list'>
                <ul>
                  <li><a href="/a">HOME</a></li>
                  <li><a href="/a">PROJECTS</a></li>
                  <li><a href="/a">DESIGN</a></li>
                  <li><a href="/a">ABOUT</a></li>
                </ul>
            </div>
        </div>
        <Footer />
    </div> 
  )
}

export default MenuOverlay