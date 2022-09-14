import { MenuBtn } from './components/MenuBtn/MenuBtn';
import { useState } from "react"
import SideOverlay from './pages/SideOverlay/SideOverlay';
import Base from './pages/Base/Base';


const App = () => {
  const [openState,setOpenState] = useState(false);
  const [currentComp,setCurrentComp] = useState('/')

  return (

    <div  className="App">
    <MenuBtn openState={openState} changeState={setOpenState} />
    <SideOverlay openState={openState} />
    <Base componentShow={{currentComp,setCurrentComp}} />
    </div>
  
  );
}

export default App;
