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
import SimplySweet from './components/portfolio/SimplySweet';
import Breadcrumb from './components/Breadcrumb';
import Pellegrino from './components/portfolio/Pellegrino';
import Doordash from './components/portfolio/Doordash';

function App() {
  return (
    <div>
      <Header/>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/portfolio/simply-sweet-stems">
            <Breadcrumb/>
            <SimplySweet/>
            </Route>
            <Route path="/portfolio/pellegrino">
            <Breadcrumb/>
            <Pellegrino/>
            </Route>
            <Route path="/portfolio/doordash">
            <Breadcrumb/>
            <Doordash/>
            </Route>
            <Route path="/about">
            <About />
            <Footer/>
            </Route>
            <Route path="/portfolio">
            <Breadcrumb/>
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
            <Route exact path="/">
            <Home />
            </Route>
        </Switch>
    </div>
  );}

export default App;
