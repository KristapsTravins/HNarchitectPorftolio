import "./css/global.css"
import "./css/tab.css"
import "./css/mobile.css"
import "./css/desktop.css"
import Footer from "../Footer/Footer"
import { ProfilePic } from "../../assets/images/ImageComponents"



export const About = (props) =>{

return(
<div className="about_center_section">

    <div className="main_description_block">
        <div className="image_block">
           <ProfilePic />
        </div>
        <div className="description_block">
            <div className="title_block">
                <h1>HELMUTS NEŽBORTS</h1>
                <h3>March, BSC.</h3>
            </div>
            <div className="description_text_block">
                <p>
                    Arhitekturas un projektēšanas pamatprincipos....
                    Pragmatiski pieejamo resursu izmantošana, lielu uzsvaru liekotu reģionāli rakturrīgiem un pieejamiem materilāiem.<br/>
                    Katrs projetks ir indivudāls ar specifiskām apkāretējas vides iezīmēm
                    ilgtpējīga projektēšana
                </p>
            </div>  
        </div>

    </div>
    <div className="exp_description_block first">
        <h3>EXPERIENCE</h3>
        <ul>
            <li>2014-2017 / Freelance work / Architect technician, 3D visualizations</li>
            <li>2017-2020 / OPEN Architecture and design / Architect assistant</li>
            <li>2020-2021 / Lauder Architects / Architect, Designer</li>
            <li>2021- currently / ĒTER / Architect, Designer</li>
        </ul>
    </div>
    <div className="exp_description_block ">
        <h3>AWARDS</h3>
        <ul>
            <li>2018 / MULTICOMFORT HOUSE STUDENTS CONTEST National stage / first Place</li>
            <li>2019 / MULTICOMFORT HOUSE STUDENTS CONTEST National stage / first Place</li>
            <li>2022 / BEBREEDERS MICRO HOME COMPETITION / Second place</li>
     
        </ul>
    </div>
    <Footer />
</div>
)
}


