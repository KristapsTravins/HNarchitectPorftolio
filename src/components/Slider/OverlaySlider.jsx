import { motion,AnimatePresence } from "framer-motion"
import { About } from "../About/About";
import HempHutExp from "../ProjectComponents/HempHut_page/HempHutExp";
import CloudCraterExp from '../ProjectComponents/Cloud_crater_page/CloudCraterExp'
import ProjectAnnas from '../ProjectComponents/Project_annas/ProjectAnnas'
import "./scss/slider_main.scss"

const OverlaySlider = (props) => {

    const slideIn={
        left:0,
        transition:{duration:3}
      };
      const slideOut={
          left:"101%",
          transition:{duration:3}
      } 

  return (
    <AnimatePresence>
    {props.openState&&(
      <motion.div
        className="content_overlay"
        initial={slideOut}
        animate={slideIn}
        exit={slideOut}
        transition={{duration:3}}
      >
        <div className='center'>
          <ProjectAnnas/>
          {/* <CloudCraterExp /> */}
      {/*       <About /> */}
           {/*  <HempHutExp/> */}
        </div>
      </motion.div>)}
</AnimatePresence>
  )
}

export default OverlaySlider