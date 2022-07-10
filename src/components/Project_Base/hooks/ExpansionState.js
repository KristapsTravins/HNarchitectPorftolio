import {useState} from "react"

export const ExpansionState = () =>{
const [ExpansionState,setExpansionState] = useState(false);
return {ExpansionState,setExpansionState};
}

export const HoverState = () =>{
    const [HoverState,setHoverState] = useState(false);
    return {HoverState,setHoverState};
}
