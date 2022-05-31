import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import { MenuBtn } from './components/MenuBtn/MenuBtn';
import Home from './pages/Home/Home';
import { useState } from "react"
import SideOverlay from './pages/SideOverlay/SideOverlay';


const App = () => {
  const [openState,setOpenState] = useState(false);
  return (
    <BrowserRouter>
    <div  className="App">
    <MenuBtn openState={openState} changeState={setOpenState} />
    <SideOverlay openState={openState} />
    <Routes>
    <Route path='/' element={<Home />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
