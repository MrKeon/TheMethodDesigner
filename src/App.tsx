import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/about">
            <About />
            <Footer/>
            </Route>
            <Route path="/portfolio">
            <Portfolio />
            <Footer/>
            </Route>
            <Route path="/gallery">
            <Gallery />
            <Footer/>
            </Route>
            <Route path="/contact" >
            <Contact />
            <Footer/>
            </Route>
            <Route path="/">
            <Home />
            </Route>
        </Switch>
    </div>
  );}

export default App;
