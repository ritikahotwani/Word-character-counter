import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cwcounter from "./Cwcounter";
import About  from './About';
import NavBar from './NavBar';
import Darkmode from 'darkmode-js';
import {app} from "./FirebaseConfig";

// const options = {
//   bottom: '64px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }

// const darkmode = new Darkmode(options);
// darkmode.showWidget();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element=<Cwcounter/>/>
              <Route path="/about" element=<About/>/>
              <Route path="*" element=<Cwcounter/>/>
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
