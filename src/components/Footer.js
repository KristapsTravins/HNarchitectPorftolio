import React from 'react'
import '../css/footer.css';


const Footer =(props)=> {
  return (
    <div className='footer-block'>
    <div  className={`footer-content `}>
      <p>20280579</p>
      <p>email@email.com</p>
    </div>
    <div className={`footer-content second `}>
    <p>instagram</p>
    <p>Riga, Latvia</p>
    </div>
    </div>
  )
}

export default Footer
