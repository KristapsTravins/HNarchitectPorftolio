import { motion } from "framer-motion"
import "./css/global.css"
import "./css/tab.css"
import "./css/mobile.css"
import "./css/desktop.css"

export const MenuBtn = (props) =>{
const pulse = {
    scale:[1, 1.2, 1],
    transition:{duration:2, repeat:Infinity ,repeatDelay:4,}
};
return(
<motion.button
onClick={()=>{
    if(props.Component.currentComp !== "/"){
        props.Component.setClickedItself(false);
        props.changeState(true)
        setTimeout(()=>{
            props.changeState(false)
        },3500)
        setTimeout(()=>{
           props.Component.setCurrentComp("/");
        },4000)
    }else{
        props.Component.setClickedItself(true);
        props.changeState(!props.openState)
    }

    
}} 
whileTap={{scale:1.7, transition:{duration:3}}}
className="Menu_btn"
animate={pulse}>


<div className="btn_label">
    <div>
        <h1 className={props.Component.currentComp === "/" && props.openState?"turnBlack":"intial"}>
            [about]
        </h1>
    </div>
</div>
<div className={`btn ${props.openState?"fadeOut":"fadeIn"}`}></div>
</motion.button>
)
}


