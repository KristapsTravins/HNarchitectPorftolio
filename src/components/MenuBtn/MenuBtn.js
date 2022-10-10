import { motion } from "framer-motion"
import "./css/global.css"
import "./css/tab.css"
import "./css/mobile.css"
import "./css/desktop.css"
import Menubtnlabel from "../Menu_btn_label/Menu_btn_label"

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
        props.navigation.setNav("ABOUT")
        setTimeout(()=>{
            props.changeState(false)
        },3500)
        setTimeout(()=>{
           props.Component.setCurrentComp("/");
        },4000)
    }else{
        props.Component.setClickedItself(true);
        props.navigation.setNav("HOME")
        props.changeState(!props.openState)
        props.openState?props.navigation.setNav("ABOUT"):<></>;
        
        
    }

    
}} 
whileTap={{scale:1.7, transition:{duration:3}}}
className="Menu_btn"
animate={pulse}>


<div className="btn_label">
    <div>
       <Menubtnlabel navigation={props.navigation.navig} oc={props.openState} about={props.Component.isClickedItself} currentPage={props.Component.currentComp} class={`label_style ${props.Component.currentComp === "/" && props.openState?"turnBlack":"initial"}`} />
    </div>
</div>
<div className={`btn ${props.openState?"fadeOut":"fadeIn"}`}></div>
</motion.button>
)
}


