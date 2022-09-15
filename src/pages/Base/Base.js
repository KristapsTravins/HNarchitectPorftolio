import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./css/global.css"

import CloudCraterExp from "../Cloud_crater_page/CloudCraterExp";
import HempHutExp from "../HempHut_page/HempHutExp";
import ProjectAnnasExp from "../Project_annas/ProjectAnnas";



const Base = (props) => {

  

    return (
     <div className="base_center">
     
     {props.componentShow.currentComp === "/"?<ProjectsBase componentShow={props.componentShow} />:<></>}
     {props.componentShow.currentComp === "huts"?<HempHutExp />:<></>}
     </div>
    );
  }
  
export default Base;

{/* <Route path="/" element={<ProjectsBase componentShow={props.componentShow} />}> </Route>
      <Route path="/hemp" element={<HempHutExp />}> </Route>
      <Route path="/cloud" element={<CloudCraterExp />}> </Route>
      <Route path="/annas" element={<ProjectAnnasExp />}> </Route>
    </Routes> */}