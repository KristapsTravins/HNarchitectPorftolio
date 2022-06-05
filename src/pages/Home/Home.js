import Project from "../../components/Project_hut/ProjectHut";
import "./css/global.css"


const Home = () => {
    return (
     <div className="home_center">
       <Project titleDescriptionData={['Modular prefab home','Concept','2022','Latvia','40 sq.m.']} />
     </div>
    );
  }
  
export default Home;