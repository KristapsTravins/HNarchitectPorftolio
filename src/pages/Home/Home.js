import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import ProjectHut from "../../components/Project_Base/Project_hut/ProjectHut";

import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";

import "./css/global.css"


const Home = () => {
GivePosition("project_hut");


    return (
     <div className="home_center">
        <ProjectsBase 
        child={ProjectHut}
        projectExpanParam={{"height":"1880px"}} 
        projectTitleDescription={["Modular prefab home","Concept","2022","Latvia","40 sq.m."]}
        projectTitle={["HEMP","HUT"]}
        />
     

       
  

   
      
   
     </div>
    );
  }
  
export default Home;