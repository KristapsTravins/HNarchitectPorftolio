import ProjectsBase from "../../components/Project_Base/ProjectsBase";
import ProjectHut from "../../components/Project_components/Project_hut/ProjectHut";
import "./css/global.css"



const text1 = "<p>Goal was to create an compact living space that feel <span>spatiualy genorous</span>.<br>This was achived by strategic placement of windows, and <span>visualy borrowing<br>outdoor space</span>. At the same time allowing <span>natural daylight</span> to pour in.<br> <br>Space apbove the bathroom is used an an additional sleeping are for the star gazers.</p>";
const text2 = "<p>Regarding the material usage, high focus is placed on <span> renewables, carbon neutral and long lasting materials.</span><br><br>  <span> Wood </span> was used for the load bearing constructins, as well indor and outdoor wall finishes,<br><br>  <span> Hemp </span> products are used for insulation and sealing.</p>";
const Btext1 = "<p>Cloud Catcher aims to address the ever rising <span>global water crisis.</span> It is estimated that <span>2.7 billion people worldwide suffer due to water scarcity.</span> Some of the affected regions don't get any rainfall for months or even years, most of the precipitation simply stays in the air, but <span>there also lies an opportunity to collect drinking water out of thin air</span> using biomimicry.</p>"
const Btext2 = "<p>The whole facade is covered in <span>recycled polyethylene mesh</span> which <span>catches</span> the air embodied <span>water</span>as <span>condensation</span>. Further it is stored in transparent <span>water-wall tanks</span>. This solution saves space, creates a lot of backup water storage and functions as a <span>thermal regulator</span>, thanks to water's large thermal storage capacity.</p>";
const Btext3 = "<p>Interior layout concept is to  create  <span>flexible spaces</span>. Movable modules providing everyday functional needs and allowing for <span>control of spatial division</span>.</p>";
const Btext4 = "<p>During periods of droughts building's embodied <span>circular system reuses gray water and wastewater</span> reducing water losses to the minimum.<span>In times of abundance</span> any additional water is <span>given back to </span>the </br> surrounding <span>fauna and flora.</span></p>";
const Project_hut = {
  open_height:"500px",
  name:"project_hut",
  height:"2040px",
  title_desc:["Modular prefab home","Concept","2022","Latvia","40 sq.m."],
  project_title:["Project","hut"],
  project_desc1:text1,
  project_desc2:text2,
}



const Home = () => {



    return (
     <div className="home_center">

      
      <ProjectsBase
      child={ProjectHut}
      />
     

       

   
      

     </div>
    );
  }
  
export default Home;