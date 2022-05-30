import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
    <div  className="App">
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
