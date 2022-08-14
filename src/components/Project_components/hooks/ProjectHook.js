import React, { useState } from 'react'


export  const ProjectHover = () => {
    
 const [hoverState,setHoveState] = useState(false);
 const hookExp = ()=>{
 return{hoverState,setHoveState}   
 }
return hookExp() ;

}

