import "./styleVars/styleShorcuts.scss"
import "./main_style.scss"
import MenuBtn from "./components/MenuBtn/MenuBtn"
import { useSliderState } from "./components/Slider/hooks/useSlidetState"
import OverlaySlider from "./components/Slider/OverlaySlider"
import Hut from "./components/HomeComponents/Huts/Huts"

const App =()=>{
const slider = useSliderState();
    return(
        <div className="app">
            <MenuBtn sliderData={slider} />
            <OverlaySlider openState={slider.sliderState} />
            <div className="base_center">
                <Hut/>
            </div>
        </div>
    )
}

export default App;