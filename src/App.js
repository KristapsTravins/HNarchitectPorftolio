import {MenuBtn} from './components/MenuBtn';
import MenuOverlay from './components/MenuOverlay';
import { useState } from 'react';
import Home from'./pages/Home';
import './css/animate.css';

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
    <div  className="App">
    <MenuOverlay menuState={animatedState}/>
    <MenuBtn closeMenu={SwitchMenu} menuState={MenuState} />
    <div className='content-block'>
    <Home />
    </div>
    </div>
  );
}

export default App;
