import { useState,useEffect } from "react";


export const useDetectHover = () =>{
    const [isHovered,setIsHovered] = useState(false);
    const [initiated,setInitiated] = useState(true);
    const FlipInitiatedBack = () =>{
        setTimeout(()=>{
            setInitiated(false);
        },2000)
    }
    return{
        isHovered,
        setIsHovered,
        initiated,
        FlipInitiatedBack,
    }
    
}




export const useWindowDimensions  = () => {
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

  

  export const useAnimationPositions = (imgPostition,imgPostition1010,imgPostition700,imgPostition448,scrWidth) =>{
    
  
    if(scrWidth<=1010 && scrWidth>=700){
      return  imgPostition1010
    }
    else if(scrWidth<=700){
       return imgPostition700
    }
    else if(scrWidth<=448){
       return imgPostition448
    }
    else{
        return imgPostition
    }
  }



  export const useAnimationPositionsCrater = (imgPostition,imgPostition1010,imgPostition700,imgPostition600,scrWidth) =>{
    
  
    if(scrWidth<=1010 && scrWidth>700){
      return  imgPostition1010
    }
    else if(scrWidth<=700 && scrWidth > 600){
       return imgPostition700
    }
    else if(scrWidth<=600){
       return imgPostition600
    }
    else{
        return imgPostition
    }
  }


