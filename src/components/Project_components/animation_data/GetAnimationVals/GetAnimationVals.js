import {useWindowDimensions} from '../../hooks/ProjectHook'
import data from '../anim_data.json'

export const GetAnimationSect1 = () =>{
    const { height, width } = useWindowDimensions();
   
    if(width>1010){
        return data.section1.w1010px
    }
    else if (width<1010){
        return data.section1.w1010px
    }
}