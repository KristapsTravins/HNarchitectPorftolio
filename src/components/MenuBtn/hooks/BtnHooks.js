import { useState } from "react"

export const ClickedBtn = () =>{
    const [btnClicked,setClicked]=useState(false);
    const [btnStatusEnabled,setBtnStatus] = useState(true);
    const setClickedOn=()=>{
        setBtnStatus(false)
        setClicked(true);
        setTimeout(()=>{
            setBtnStatus(true)
            setClicked(false)
        },2500)
    };
    return{btnClicked,setClickedOn,btnStatusEnabled,setBtnStatus}
}

