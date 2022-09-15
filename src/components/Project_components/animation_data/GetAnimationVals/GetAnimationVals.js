import {useWindowDimensions} from '../../hooks/ProjectHook'
import data from '../anim_data.json'
import data2 from '../anim_data_crater.json'

export const GetAnimationSect1 = () =>{
    const { width } = useWindowDimensions();
    
    if(width>1010){
        return data.section1.w1010px
    }
    else if (width<360){
        return data.section1.w000px
    }
    else if (width<445&&width>360){
        return data.section1.w360px
    }
    else if (width<700&&width>445){
        return data.section1.w445px
    }
    else if (width<1010){
        return data.section1.w700px
    }
}

export const GetAnimationSect2 = () =>{
    const { width } = useWindowDimensions();
    
    if(width>1010){
        return data2.section2.w1010px
    }
    else if (width<360){
        return data2.section2.w000px
    }
    else if (width<445&&width>360){
        return data2.section2.w360px
    }
    else if (width<700&&width>445){
        return data2.section2.w445px
    }
    else if (width<1010){
        return data2.section2.w700px
    }
}


