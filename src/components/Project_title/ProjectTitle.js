import { motion } from "framer-motion"
import parse from 'html-react-parser';
import './css/global.css';
import './css/tab.css';
import './css/desktop.css';


const ProjectTitle = (props)=> {
const classN ="hemp_title"; 
  return (
    <motion.div
    animate={{
      top:"50px",
      left:"25px",
      fontSize:"80px"

    }}
    >
      {parse(`<h1 className="${classN}" >H<span>EMP</span><br/><span className="lower_key">HUT</span></h1>`)      }
    </motion.div>
 
  )
}

export default ProjectTitle