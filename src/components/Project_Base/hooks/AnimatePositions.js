import sectionOne from "../Project_hut/AnimData/Hut.json"
import sectionTwo from "../Project_Clound/AnimData/Cloud.json"

const chooseProject = (proj) =>{
    let section = {};
    switch (proj) {
        case "project_hut":
            section = sectionOne.project_hut;
            break;
        case "project_cloud":
            section = sectionTwo.project_cloud;
            break;     
        case "project_annas":
            section = sectionOne.project_hut;
            break;
        default:
            break;
    }
    return section
}

const chooseComponent = (current,comp) =>{

let component = {};
    switch (comp) {
        case "title":
            component = current.title;
            break;
        case "img_1":
            component = current.img_1;
            break;     
        case "img_2":
            component = current.img_2;
            break;
        case "img_3":
            component = current.img_3;
            break;
        case "img_4":
            component = current.img_4;
            break;
        case "img_5":
            component = current.img_5;
            break;    
        case "title_description":
            component = current.title_description;
            break;
        case "text_description_1":
            component = current.text_description_1;
            break;
        case "text_description_2":
            component = current.text_description_2;
            break;
        case "text_description_3":
            component = current.text_description_3;
            break;
        
        default:
            component = {};
            break;
    }

    return component
    

}

const SelectSize = (cur,width) =>{
let answ = {}
if(width<800){
    answ = cur.mobile
}else if (width>800&&width<1000){
    answ = cur.tab
}else{
    answ = cur.desktop
}
return answ
}




export const GivePosition = (Project,OpenState,component,screenWidth) =>{
let answ = chooseProject(Project);

let answState = {};
if(OpenState){
answState= SelectSize(chooseComponent(answ.open_state,component),screenWidth)

}else{
answState = SelectSize(chooseComponent(answ.closed_state,component),screenWidth)

}

return answState
}