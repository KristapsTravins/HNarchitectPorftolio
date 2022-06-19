import {useState} from "react"

export const ExpansionState = () =>{
const [ExpansionState,setExpansionState] = useState(false);
return {ExpansionState,setExpansionState};
}