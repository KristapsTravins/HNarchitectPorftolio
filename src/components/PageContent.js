import React from 'react';
import parse from "html-react-parser";
import"../css/home_content.css";


const PageContent = (props)=> {
  return (
<div className={props.typeClass} >
    <div className="content_container">
    <div className='header_field'>
      <h2>{parse(props.title)}</h2>
    </div>
    <div className='content_first'>
      <img src={props.image1} alt="" />
    </div>
    <div className='content_sec'>
      <img src={props.image2} alt="" />
    </div>
    <div className='text_field'>
      <p>
        {props.text}
      </p>
  </div>
</div>
</div>
  )
}


export default PageContent
