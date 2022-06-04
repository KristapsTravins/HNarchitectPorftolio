
import parse from 'html-react-parser';
import './css/global.css'


const ProjectTitle = (props)=> {
const classN ="hemp_title"; 
  return (
parse(`<h1 className="${classN}" >H<span>EMP</span><br/><span className="lower_key">HUT</span></h1>`)       
  )
}

export default ProjectTitle