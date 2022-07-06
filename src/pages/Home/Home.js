import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import ProjectHut from "../../components/Project_Base/Project_hut/ProjectHut";
import ProjectCloud from "../../components/Project_Base/Project_Clound/ProjectCloud";
import { GivePosition } from "../../components/Project_Base/hooks/AnimatePositions";

import "./css/global.css"



const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>";
const text2 = "<p>Regarding the material usage, high focus is placed on <span> renewables, carbon neutral and long lasting materials.</span><br><br>  <span> Wood </span> was used for the load bearing constructins, as well indor and outdoor wall finishes,<br><br>  <span> Hemp </span> products are used for insulation and sealing.</p>";
const Btext1 = "<p>Cloud Catcher aims to address the ever rising <span>global water crisis.</span> It is estimated that <span>2.7 billion people worldwide suffer due to water scarcity.</span> Some of the affected regions don't get any rainfall for months or even years, most of the precipitation simply stays in the air, but <span>there also lies an opportunity to collect drinking water out of thin air</span> using biomimicry.</p>";



const Home = () => {



    return (
     <div className="home_center">
        <ProjectsBase 
        child={ProjectHut}
        projectName={"project_hut"}
        projectExpanParam={{"height":"2040px"}} 
        projectTitleDescription={["Modular prefab home","Concept","2022","Latvia","40 sq.m."]}
        projectTitle={["HEMP","HUT"]}
        projectDescriptionText1={text1}
        projectDescriptionText2={text2}
        /> 

        <ProjectsBase 
        child={ProjectCloud}
        projectExpanParam={{"height":"2040px"}}
        projectName={"project_cloud"}
        projectTitleDescription={["Tiny house","Concept","2022","Atacama Desert","25 sq.m."]}
        projectTitle={["CLOUND","CHATER"]}
        projectDescriptionText1={Btext1}
        projectDescriptionText2={Btext1}
        />
     
     

       
  

   
      
   
     </div>
    );
  }
  
export default Home;