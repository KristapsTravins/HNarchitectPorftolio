
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


export const SetAnimations = (state) =>{

    
    if(state){
        return animData.HoverAnimations.img1.move
    }else{
        return {}
    }

}
