import { motion } from 'framer-motion'
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
    className={`menu_btn_outer`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1,duration: 1 }}
    id={btnClick.btnClicked?"clicked":"notClicked"}
    onClick={()=>{      
      if(btnClick.btnStatusEnabled){
        btnClick.setClickedOn();
        Slider.setSliderState(!Slider.sliderState)
      }
      }}>
    <div className={`inner_menu_btn ${Slider.sliderState?"slider_open":"slider_closed"}`}>
    <BtnLabel sliderState={Slider.sliderState} btnStatus={btnClick.btnStatusEnabled} />
    </div>

    </motion.div>
   
  )
}

export default MenuBtn