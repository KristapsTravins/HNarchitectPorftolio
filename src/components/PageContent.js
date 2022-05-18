import React from 'react';
import './sectionStyle/section_one/css/mobile.css';
import './sectionStyle/section_one/css/viewport.css';
import useWindowDimensions from '../hooks/useWindowDimensions';

const TitleTextMob = (props) =>{
return(
<p>{props.title_text.map((x)=>`${x} / `)}</p>
)
}
const TitleTextWide = (props) =>{
  return(
  <ul>
    {props.title_text.map((x)=><li>-{x}</li>)}
  </ul>
  )
  }


const PageContent = (props)=> {

const {height,width} = useWindowDimensions();

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
     {/*  {width>=900?<TitleTextWide title_text={props.title_text} />:< TitleTextMob title_text={props.title_text} />} */}
     <TitleTextWide title_text={props.title_text} />
    </div>
</div>
  )
}


export default PageContent
