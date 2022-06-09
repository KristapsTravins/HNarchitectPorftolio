import Project from "../../components/Project_hut/ProjectHut";
import { useState } from "react";
import "./css/global.css"


const Home = () => {
  const [sectionState,setSectionState] = useState(false);
    return (
     <div className="home_center">
       <Project sectionOpen={sectionState} titleDescriptionData={['Modular prefab home','Concept','2022','Latvia','40 sq.m.']} />

     </div>
    );
  }
  
export default Home;