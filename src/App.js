import {MenuBtn} from './components/MenuBtn';
import MenuOverlay from './components/MenuOverlay';
import { useState } from 'react';
import Home from'./pages/Home';

import './css/animate.css';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [MenuState, setMenuState] = useState(false);
  const [animatedState,setAnimatedState] = useState('closedStance');


  const SwitchMenu =()=>{
    if(!MenuState){
      setAnimatedState("openMenu");
      setMenuState(!MenuState);
    }else{
      setAnimatedState("closeMenu");
      setMenuState(!MenuState); 
    }

  }

  return (
    <BrowserRouter>
    <div  className="App">
    <MenuOverlay closeMenu={SwitchMenu} menuState={animatedState}/>
    <MenuBtn closeMenu={SwitchMenu} menuState={MenuState} />
    <div className='content-block'>
    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
