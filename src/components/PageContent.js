import React from 'react';
import parse from "html-react-parser";

import"../css/home_content.css";
import"../css/home_content_sec.css";
import"../css/home_content_thir.css";

const PageContent = (props)=> {
  return (
    <div className={`content_block ${props.typeClass}`}>
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
  )
}


export default PageContent
