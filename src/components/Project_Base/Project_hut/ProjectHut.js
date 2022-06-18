import React from 'react'
import './css/global.css'
import './css/mobile.css'
const ProjectHut = (props) => {
  return (
    <div className='project_hut_box'>
        <button className='project_hut_button'
        onClick={() =>props.openSection(!props.sectionState)}>open</button>
    <div className='img_1'></div>
    <div className='img_2'></div>
    <div className='img_3'></div>
    {/*     <div className='img_4'></div>
    <div className='img_5'></div> */}
    </div>
  )
}

export default ProjectHut