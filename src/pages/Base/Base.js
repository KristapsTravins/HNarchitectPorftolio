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



const Base = () => {



    return (
     <div className="base_center">
     
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProjectsBase />}> </Route>
      <Route path="/a" element={<HempHutExp />}> </Route>
      <Route path="/b" element={<CloudCraterExp />}> </Route>
      <Route path="/c" element={<ProjectAnnasExp />}> </Route>
    </Routes>
  </BrowserRouter>
     </div>
    );
  }
  
export default Base;