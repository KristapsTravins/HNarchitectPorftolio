import React from 'react'
import "./css/global.css"
import "./css/view.css"

import ProjectTitle from "../../components/ProjectTitle/ProjectTitle"
import ProjectDescription from '../../components/Project_title_description/ProjectDescription'

const HempHutExp = () => {
  return (
    <div className='hemp_hut_outer'>
        <div className='hemp_hut_inner'>

        <ProjectTitle title={["HEMP","HUT"]}/>

        <ProjectDescription titleDescription={['Modular prefab home',"Concept","2022","Latvia","40 sq.m."]} />        

        </div>
    </div>
  )
}

export default HempHutExp