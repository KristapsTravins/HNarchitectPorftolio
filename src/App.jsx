import "./styleVars/styleShorcuts.scss"
import "./main_style.scss"
import MenuBtn from "./components/MenuBtn/MenuBtn"
import { useSliderState } from "./hooks/useSlidetState"


const App =()=>{
const slider = useSliderState();
    return(
        <div className="app">
            <MenuBtn sliderData={slider} />
            <div className="base_center">
                
            </div>
        </div>
    )
}

export default App;