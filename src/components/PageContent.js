import React from 'react';
import parse from "html-react-parser";
import './sectionStyle/section_one/css/mobile.css';


const PageContent = (props)=> {
  return (
<div className={props.typeClass} >
    <div className='image_box_1'>
      <img src={props.image1} alt="" />
    </div>
    <div className='image_box_2'>
      <img src={props.image2} alt="" />
    </div>
    <div className='image_box_3'>
      <img src={props.image3} alt="" />
    </div>
    <div className='text_box'>
    <h3>{props.title}</h3>
    <ul>
      {props.title_text.map((x)=><li>-{x}</li>)}
    </ul>
    </div>
</div>
  )
}


export default PageContent
