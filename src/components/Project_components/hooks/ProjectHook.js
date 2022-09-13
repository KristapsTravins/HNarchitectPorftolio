import React, { useState, useEffect } from 'react'


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

export const useWindowDimensions = () => {

    const hasWindow = typeof window !== 'undefined';
  
    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }
  
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, [hasWindow]);
  
    return windowDimensions;
  }



