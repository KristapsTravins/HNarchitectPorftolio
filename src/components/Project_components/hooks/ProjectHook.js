import React, { useState } from 'react'


export  const ProjectHover = () => {
 const [hoverState,setHoveState] = useState(false);
 const hookExp = ()=>{
 return{hoverState,setHoveState}   
 }
return hookExp() ;
}



export const ProjectOpenClose = () => {
    const [openState,setOpenState] = useState(false);
    const expOpenSt = ()=>{
        return {openState,setOpenState};
    }
    return expOpenSt();
}


export const IsInView = () => {
   const [view,setview] = useState(false);

   const openView = ()=>{
    return {view,setview};
    }

return openView();
}



