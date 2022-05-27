import {MenuBtn} from './components/MenuBtn';
import { useState } from 'react';
import './css/animate.css';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div  className="App">
    <Routes>
    <Route path='/' element={<></>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
