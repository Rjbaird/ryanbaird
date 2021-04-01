import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Projects';
import Resume from './pages/Resume';

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
      <NavDropdown isOpen={ isOpen } toggle={ toggle } />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
