import React, { useState } from 'react';
import './sectionStyle/section_one/css/mobile.css';
import './sectionStyle/section_one/css/viewport.css';
import './sectionStyle/section_one/css/animate.css';
import './sectionStyle/section_one/css/open_animate.css';
import useWindowDimensions from '../hooks/useWindowDimensions';



const PageContent = (props)=> {
const [isEntered,setEntered] = useState(false);
const [isOpen,setOpen] = useState(false)
const {height,width} = useWindowDimensions();

return (
<div className={props.typeClass}
     onMouseLeave={()=>setEntered(false)}
>
    <div onMouseEnter={()=>setEntered(true)}
         onClick={()=>setOpen(!isOpen)} 
         className={`${isOpen?"full_view_img1":""} image_box_1 ${isEntered?"active":""}`}>
      <img src={props.image1} alt="" />
    </div>
    <div onMouseEnter={()=>setEntered(true)}
         onClick={()=>setOpen(true)} 
         className={`${isOpen?"full_view_img2":""} image_box_2 ${isEntered?"active1":""}`}>
      <img src={props.image2} alt="" />
    </div>
    <div onMouseEnter={()=>setEntered(true)}
         onClick={()=>setOpen(true)} 
         className={`${isOpen?"full_view_img3":""} image_box_3${isEntered?" active2":""}`}>
      <img src={props.image3} alt="" />
    </div>
    {isOpen?<div className={`${isOpen?"full_view_img4":""} image_box_4 `}><img src={props.image4} alt="" /></div>:<></>}
    {isOpen?<div className={`${isOpen?"full_view_img5":""} image_box_5 `}><img src={props.image5} alt="" /></div>:<></>}
      
    
    <div className={`${isOpen?"open_text_main":""} text_box`}>
    <h3>{props.title}</h3>
      {width>=900?!isOpen?<TitleTextWide title_text={props.title_text} />:<></>:!isOpen?< TitleTextMob title_text={props.title_text} />:<></>}
    </div>

    {isOpen?<div className={`${isOpen?"open_info_text":""} info_text`}><p>{props.open_text}</p></div>:<></>}
    {isOpen?<div className={`${isOpen?"open_info_text2":""} info_text2`} ><p>{props.open_text1}</p></div>:<></>}
</div>
  )
}



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
  


export default PageContent
