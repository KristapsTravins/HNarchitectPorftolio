import { useState } from "react";
import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import "./css/global.css"


const Home = () => {
  const [sectionState,setSectionState] = useState(false);
    return (
     <div className="home_center">
        <ProjectsBase projectExpanParam={{"height":"1692px"}} sectionStatus={sectionState} setStatus={setSectionState} />
        <ProjectsBase />
      
   
     </div>
    );
  }
  
export default Home;