import React from 'react'
import "./css/global.css"






const ProjectTextDescription = (props) => {
   
  return (
    <div 
    className={props.textClass + " text_description_base" }
    dangerouslySetInnerHTML={{ __html: props.text }}
    >
    
    </div>
  )
}



export default ProjectTextDescription