import "./styleVars/styleShorcuts.scss"
import "./main_style.scss"
import MenuBtn from "./components/MenuBtn/MenuBtn"
import { useSliderState } from "./components/Slider/hooks/useSlidetState"
import OverlaySlider from "./components/Slider/OverlaySlider"


const App =()=>{
const slider = useSliderState();
    return(
        <div className="app">
            <MenuBtn sliderData={slider} />
            <OverlaySlider openState={slider.sliderState} />
            <div className="base_center">
                
            </div>
        </div>
    )
}

export default App;