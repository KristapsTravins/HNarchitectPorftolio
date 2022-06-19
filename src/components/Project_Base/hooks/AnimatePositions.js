import ProjectData from "../Project_data/ProjectData.json"

const chooseProject = (proj) =>{
    let section = {};
    switch (proj) {
        case "project_hut":
            section = ProjectData.project_hut;
            break;
        case "project_cloud":
            section = ProjectData.project_hut;
            break;     
        case "project_annas":
            section = ProjectData.project_hut;
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
        case "desc":
            component = current.img;
            break;     
        case "img":
            component = current.img;
            break;
        default:
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