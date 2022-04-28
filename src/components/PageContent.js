import React from 'react';
import parse from "html-react-parser";
import"../css/home_content_style1.css";
import"../css/home_content_style2.css";
import"../css/home_content_style3.css";


const PageContent = (props)=> {
  return (
<div loading="lazy" className={props.typeClass} >
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
