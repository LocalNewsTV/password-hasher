import { NavBar } from './components/NavBar/NavBar.js'
import { Hasher } from './components/Hasher/Hasher.js';
import './App.css';
import React from 'react';


function App() {
  React.useEffect(()=>{
    document.getElementsByClassName('mainCont')[0].style.backgroundImage = "url('./images/bg.webp')"
  });
  return (
    <>
      <NavBar />
      <div className="mainCont">
        <Hasher />
      </div>
    </>
  );
}

export default App;
