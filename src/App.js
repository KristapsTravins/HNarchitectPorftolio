import { MenuBtn } from './components/MenuBtn/MenuBtn';
import { useState } from "react"
import SideOverlay from './pages/SideOverlay/SideOverlay';


const App = () => {
  const [openState,setOpenState] = useState(false);
  return (
   
    <div  className="App">
    <MenuBtn openState={openState} changeState={setOpenState} />
    <SideOverlay openState={openState} />
    
    </div>
  
  );
}

export default App;
