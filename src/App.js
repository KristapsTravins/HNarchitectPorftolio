import { MenuBtn } from './components/MenuBtn/MenuBtn';
import { useState } from "react"
import SideOverlay from './pages/SideOverlay/SideOverlay';
import Base from './pages/Base/Base';


const App = () => {
  const [openState,setOpenState] = useState(false);
  const [isClickedItself,setClickedItself] = useState(false);
  const [currentComp,setCurrentComp] = useState('/')

  return (

    <div  className="App">
    <MenuBtn openState={openState} changeState={setOpenState} Component={{currentComp,setCurrentComp,isClickedItself,setClickedItself}}  />
    <SideOverlay openState={openState} Component={currentComp} aboutShow={isClickedItself} />
    <Base componentShow={{currentComp,setCurrentComp,setOpenState,setClickedItself}} />
    </div>
  
  );
}

export default App;
