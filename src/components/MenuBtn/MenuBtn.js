import { motion } from "framer-motion"
import "./css/global.css"
import "./css/tab.css"
import "./css/mobile.css"
import "./css/desktop.css"

import { useState } from "react"




export const MenuBtn = () =>{
const [openState,setOpenState] = useState(false);

const pulse = {
    scale:[1, 1.2, 1],
    transition:{duration:2, repeat:Infinity ,repeatDelay:4,}
};



return(
<motion.button 
onClick={()=>{
    setOpenState(!openState)
}}
whileTap={{scale:1.7, transition:{duration:3}}}
className="Menu_btn"
animate={pulse}>
<div className={openState?"fadeOut":"fadeIn"}>

</div>
</motion.button>
)
}


