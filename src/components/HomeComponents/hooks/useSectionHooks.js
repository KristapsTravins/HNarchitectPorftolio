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

  export const useAnimationPositionsAnn = (imgPostition,imgPostition850,imgPostition800,imgPostition740,imgPostition650,
    imgPostition560,imgPostition505,imgPostition390,scrWidth) =>{
    
  
    if(scrWidth<=850 && scrWidth>800){
      return  imgPostition850
    }
    else if(scrWidth<=800 && scrWidth > 740){
       return imgPostition800
    }
    else if(scrWidth<=740 && scrWidth > 650){
       return imgPostition740
    }
    else if(scrWidth<=650 && scrWidth > 560){
      return imgPostition650
   }
   else if(scrWidth<=560 && scrWidth > 505){
    return imgPostition560
 }
  else if(scrWidth<=505 && scrWidth > 442){
    return imgPostition505
  }
  else if(scrWidth<=390){
    return imgPostition390
 }
  else{
        return imgPostition
    }
  }




