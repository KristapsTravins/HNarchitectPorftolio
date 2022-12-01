import { useState,useRef,useEffect } from "react"
import "./styleVars/styleShorcuts.scss"
import "./main_style.scss"
import { useAppHook } from "./assets/hooks/AppHooks" 
import MenuBtn from "./components/MenuBtn/MenuBtn"
import { useSliderState } from "./components/Slider/hooks/useSlidetState"
import OverlaySlider from "./components/Slider/OverlaySlider"
import Hut from "./components/HomeComponents/Huts/Huts"
import ProjectCrater from "./components/HomeComponents/Crater/ProjectCrater"
import ProjectAnna from "./components/HomeComponents/Project_ann/ProjectAnna"


const App =()=>{
const slider = useSliderState();
const boxRef = useRef();
const [posX, setX] = useState({});
const appSlideContent = useAppHook();

const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);
  };
  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);


    return(
        <div className="app">
            {typeof posX != "undefined"?<MenuBtn sliderData={slider} position={posX} setPage={appSlideContent.setSlideContent} />:<></>}
            <OverlaySlider slide={appSlideContent.slideContent} openState={slider.sliderState}  />
            <div ref={boxRef} className="base_center">
                <Hut setPage={appSlideContent.setSlideContent} sliderData={slider} />
                <ProjectCrater setPage={appSlideContent.setSlideContent} sliderData={slider} /> 
                <ProjectAnna setPage={appSlideContent.setSlideContent} sliderData={slider} /> 
            </div>
        </div>
    )
}

export default App;