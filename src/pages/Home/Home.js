import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import ProjectHut from "../../components/Project_Base/Project_hut/ProjectHut";

import "./css/global.css"


const Home = () => {

    return (
     <div className="home_center">
        <ProjectsBase projectExpanParam={{"height":"1692px"}} child={ProjectHut}/>  
  

   
      
   
     </div>
    );
  }
  
export default Home;