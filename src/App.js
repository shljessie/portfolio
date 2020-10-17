import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';
import Work from './components/work';

function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
