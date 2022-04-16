import logo from './logo.svg';
import './App.css';
import { Cityform } from './Components/Cityform';
import { Countryform } from './Components/Countryform';
import {Routes,Route} from 'react-router-dom'
import { Home } from "./Components/Home"

function App() {
  return (
      // <Cityform/>
      // <Countryform/>

      <Routes>

<Route path='/' element={<Home/>}/>

<Route path='/cityform' element={<Cityform/>}/>
<Route path='/countryform' element={<Countryform/>}/>


      </Routes>





  );
}

export default App;
