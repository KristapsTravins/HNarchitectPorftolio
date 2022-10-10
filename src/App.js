import { MenuBtn } from './components/MenuBtn/MenuBtn';
import { useState } from "react"
import SideOverlay from './pages/SideOverlay/SideOverlay';
import Base from './pages/Base/Base';


const App = () => {
  const [openState,setOpenState] = useState(false);
  const [isClickedItself,setClickedItself] = useState(false);
  const [currentComp,setCurrentComp] = useState('/')
  const [navig,setNav] = useState("ABOUT")

  return (

    <div  className="App">
    <MenuBtn openState={openState} changeState={setOpenState} Component={{currentComp,setCurrentComp,isClickedItself,setClickedItself}} navigation={{navig,setNav}}  />
    <SideOverlay openState={openState} Component={currentComp} aboutShow={isClickedItself} />
    <Base componentShow={{currentComp,setCurrentComp,setOpenState,setClickedItself}} navigation={{navig,setNav}}  />
    </div>
  
  );
}

export default App;
