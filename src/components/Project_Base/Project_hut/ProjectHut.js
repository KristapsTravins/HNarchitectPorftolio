import React from 'react'
import './css/global.css'
import './css/mobile.css'
import ProjectDescription from '../Project_title_description/ProjectDescription'
import ProjectTitle from '../ProjectTitle/ProjectTitle'
import ProjectText from '../Project_description_text/ProjectText'


const ProjectHut = (props) => {

  return (
    <div className='project_hut_box'>

      {/* temp */}
        <button className='project_hut_button'
        onClick={() => props.OpenClose.setExpansionState(!props.OpenClose.ExpansionState) }>open</button>
      {/* temp */}


    <div className='img_1'></div>
    <div className='img_2'></div>
    <div className='img_3'></div>
    <ProjectTitle title={props.title} titlePosition={props.titlePosition} />
    <ProjectDescription titleDescription={["a","vb","c"]}/>




    {/* closed */}
    <div className='img_4'></div>
    <div className='img_5'></div>
    <ProjectText  />
    <ProjectText  /> 
    {/* closed */} 
    </div>
  )
}

export default ProjectHut