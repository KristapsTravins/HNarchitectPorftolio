import {MenuBtn} from './components/MenuBtn';
import MenuOverlay from './components/MenuOverlay';
import { useState } from 'react';
import './css/animate.css'
function App() {

  const [MenuState, setMenuState] = useState(false);
  const [animatedState,setAnimatedState] = useState('closedStance');


  const SwitchMenu = async ()=>{
  let timeout = MenuState?2500:1000;
    if(!MenuState){
      setAnimatedState('openMenu')
      setTimeout(()=> {
        setMenuState(true);
      },timeout);
    }else{
      setTimeout(()=> {
        setAnimatedState('closeMenu');
        setTimeout(()=>{
        setMenuState(false);
        },timeout+100);
        return "";    
      },timeout)
    }
    setAnimatedState('closedStance');
  
  }

  return (
    <div className="App">
    {MenuState?<MenuOverlay menuState={animatedState}/>:<></>}
   
    <MenuBtn closeMenu={SwitchMenu} menuState={MenuState} />
    <div className='content-block'>


    </div>
    </div>
  );
}

export default App;
