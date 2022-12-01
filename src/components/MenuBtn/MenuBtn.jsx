import { motion,AnimatePresence} from 'framer-motion'
import React,{ useState } from 'react'
import {ClickedBtn} from './hooks/BtnHooks'
import "./scss/animatons/animations.scss"
import "./scss/btn_main.scss"
import BtnLabel from "../BtnLabel/btnLable"



const MenuBtn = (props) => {

const btnClick = ClickedBtn();
const Slider = props.sliderData;

  return (
    <motion.div
    style={props.position!==0?{left:props.position}:{}}
    className={`menu_btn_outer`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1,duration: 1 }}
    id={btnClick.btnClicked?"clicked":"notClicked"}
    onClick={()=>{      
      if(btnClick.btnStatusEnabled){
        btnClick.setClickedOn();
        Slider.setSliderState(!Slider.sliderState)
        props.setPage("ABOUT");
      }
      }}>
         <div className={`inner_menu_btn ${Slider.sliderState?"slider_open":"slider_closed"} ${Slider.sliderState?"open_seq":"close_seq"}`}>
              <BtnLabel sliderState={Slider.sliderState} btnStatus={btnClick.btnStatusEnabled} />
         </div> 
        

    </motion.div>
   
  )
}

export default MenuBtn



{/* <div className={`inner_menu_btn ${Slider.sliderState?"slider_open":"slider_closed"}`}>
<BtnLabel sliderState={Slider.sliderState} btnStatus={btnClick.btnStatusEnabled} />
</div> */}