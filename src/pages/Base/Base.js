import ProjectsBase from "../../components/Project_Base/ProjectsBase";

import "./css/global.css"

import CloudCraterExp from "../Cloud_crater_page/CloudCraterExp";
import HempHutExp from "../HempHut_page/HempHutExp";
import ProjectAnnasExp from "../Project_annas/ProjectAnnas";



const Base = (props) => {

  

    return (
     <div className="base_center">
     
     {props.componentShow.currentComp === "/"?<ProjectsBase componentShow={props.componentShow} />:<></>}
     {props.componentShow.currentComp === "huts"?<HempHutExp />:<></>}
     {props.componentShow.currentComp === "ann"?<ProjectAnnasExp />:<></>}
     {props.componentShow.currentComp === "crat"?<CloudCraterExp />:<></>}
     </div>
    );
  }
  
export default Base;

