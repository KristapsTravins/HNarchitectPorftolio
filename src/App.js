import {MenuBtn} from './components/MenuBtn';
import MenuOverlay from './components/MenuOverlay';
import { useState } from 'react';
import Home from'./pages/Home';
import About from'./pages/About';
import Projects from'./pages/Projects';
import Design from'./pages/Design';
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
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/design' element={<Design/>} />
    </Routes>
  
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
