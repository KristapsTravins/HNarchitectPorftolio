
import React from 'react';
import { useState, useEffect } from 'react';
import animData from "../animationData/animationData.json"



export const SetHoverAnimation =()=>{
    const [state,setState] = useState(false);
 
    const setHoverEffect = (screenWidth,value) =>{
        if(screenWidth>=1000){
            setState(value)
        }
    }
    return {state,setHoverEffect}
}


export const SetAnimations = (screenWidth) =>{
if(screenWidth<550){
    return animData.OpenAnimation.mobile
}else if(screenWidth>800){
  
    return animData.OpenAnimation.desktop
}else{
    return animData.OpenAnimation.tab
}
    


}
