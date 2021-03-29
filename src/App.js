import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import NavDropdown from './components/NavDropdown';
import Home from './pages/Home';
// import About from './pages/about';
// import Portfolio from './pages/projects';
// import Resume from './pages/resume';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideDowndown = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideDowndown);
    return () => {
      window.removeEventListener('resize', hideDowndown);
    }
  })

  return (
    <div className="">
      <Navbar toggle={toggle} />
      <Switch>
        <Home />
      </Switch>
    </div>
  );
}

export default App;
