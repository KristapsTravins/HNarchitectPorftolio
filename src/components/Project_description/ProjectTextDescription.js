import React from 'react'
import "./css/global.css"



const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>"



const ProjectTextDescription = (props) => {
   
  return (
    <div 
    className={props.textClass}
    dangerouslySetInnerHTML={{ __html: text1 }}
    >
    
    </div>
  )
}



export default ProjectTextDescription