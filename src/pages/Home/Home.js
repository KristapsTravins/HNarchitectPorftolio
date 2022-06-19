import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import ProjectHut from "../../components/Project_Base/Project_hut/ProjectHut";

import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";

import "./css/global.css"


const Home = () => {
GivePosition("project_hut");


    return (
     <div className="home_center">
        <ProjectsBase 
        projectExpanParam={{"height":"1692px"}} 
        child={ProjectHut}
        projectTitle={["HEMP","HUT"]}
        />  
  

   
      
   
     </div>
    );
  }
  
export default Home;