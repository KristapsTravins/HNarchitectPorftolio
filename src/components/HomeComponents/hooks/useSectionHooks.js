import { useState } from "react"

export const useDetectHover = () =>{
    const [isHovered,setIsHovered] = useState(false);
    const [initiated,setInitiated] = useState(true);
    const [img,setimg]= useState({})
    const setImgPos = (obj) =>{
        setImgPos(getXYVals(obj))
    }
    const FlipInitiatedBack = () =>{
        setTimeout(()=>{
            setInitiated(false);
        },2000)
    }

    return{isHovered,setIsHovered,initiated,FlipInitiatedBack,setImgPos,img}
    
}

export const getXYVals = (DocObject) =>{
   const object =  DocObject.getBoundingClientRect();
   return {
    x:object.x,
    y:object.y
   }
}

