import { motion } from 'framer-motion'
import React,{ useState } from 'react'
import {ClickedBtn} from './hooks/BtnHooks'
import "./scss/animatons/animations.scss"
import "./scss/btn_main.scss"



const MenuBtn = () => {

const btnClick = ClickedBtn();
  return (
    <motion.div
    className={`menu_btn_outer`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1,duration: 1 }}
    id={btnClick.btnClicked?"clicked":"notClicked"}
    onClick={()=>btnClick.btnStatusEnabled?btnClick.setClickedOn():""}

    >

    </motion.div>
   
  )
}

export default MenuBtn