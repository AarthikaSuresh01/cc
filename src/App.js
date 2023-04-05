import logo from './logo.svg';
import './App.css';
import AxiosGet1 from './components/day7';
import { D6 } from './components/day6';
import Msg from './components/day8';
import D10 from './components/day10';
import {BrowserRouter,Routes,Link,Route} from "react-router-dom";
import Login from './components/day10/login';


function App() {
  return (
    <BrowserRouter>
    <ul className='navbar1'>
      <li className='nav-item1'>
        <Link to="/">Day 6</Link>
      </li>
      <li className='nav-item1'>
        <Link to='/day7'>Day 7</Link>
      </li>
      <li className='nav-item1'>
        <Link to='/day8'>Day 8</Link>
      </li>
      <li className='nav-item1'>
        <Link to='/day10'>Day 10</Link>
      </li>
    </ul>
    <Routes>
     <Route exact path="/" element={<D6/>}></Route>
     <Route path="/day7" element={<AxiosGet1/>}></Route>
     <Route path="/day8" element={<Msg />}></Route>
     <Route path="/day10" element={<D10 />}></Route>
    </Routes>
    <Submit />
    </BrowserRouter>
    
    
  );

}

export default App;
