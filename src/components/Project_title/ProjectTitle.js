import { motion } from "framer-motion"
import parse from 'html-react-parser';
import './css/global.css';
import './css/tab.css';
import './css/desktop.css';


const ProjectTitle = (props)=> {
  return (

   <motion.h1 className="hemp_title" 
              animate={{}}
   >
   {parse("H<span>EMP</span><br/><span className='lower_key'>HUT</span>")}</motion.h1>
 
 
  )
}

export default ProjectTitle