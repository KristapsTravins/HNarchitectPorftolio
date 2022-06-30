import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import ProjectHut from "../../components/Project_Base/Project_hut/ProjectHut";

import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";

import "./css/global.css"



const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>";

const text2 = "<p>Regarding the material usage, high focus is placed on <span> renewables, carbon neutral and long lasting materials.</span><br><br>  <span> Wood </span> was used for the load bearing constructins, as well indor and outdoor wall finishes,<br><br>  <span> Hemp </span> products are used for insulation and sealing.</p>";



const Home = () => {
GivePosition("project_hut");


    return (
     <div className="home_center">
        <ProjectsBase 
        child={ProjectHut}
        projectExpanParam={{"height":"1880px"}} 
        projectTitleDescription={["Modular prefab home","Concept","2022","Latvia","40 sq.m."]}
        projectTitle={["HEMP","HUT"]}
        projectDescriptionText1={text1}
        projectDescriptionText2={text2}
        />
     

       
  

   
      
   
     </div>
    );
  }
  
export default Home;