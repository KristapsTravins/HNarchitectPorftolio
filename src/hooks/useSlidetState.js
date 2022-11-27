import { useState } from "react"


export const useSliderState =()=>{
const [sliderState,setSliderState] = useState(false);
return {sliderState,setSliderState}
}