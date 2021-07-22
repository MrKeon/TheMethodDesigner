import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SimplySweet from './components/portfolio/SimplySweet';
import Breadcrumb from './components/Breadcrumb';
import Pellegrino from './components/portfolio/Pellegrino';
import Doordash from './components/portfolio/Doordash';
import DesignBasics from './components/portfolio/DesignBasics';
import PhotoGallery from './components/Gallery';
import { photos } from './resources/photos';
import Sitemap from './components/Sitemap';

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
            <Route path="/portfolio/designbasics">
            <Breadcrumb/>
            <DesignBasics/>
            </Route>
            <Route path="/about">
            <About />
            </Route>
            <Route path="/portfolio">
            <Breadcrumb/>
            <Portfolio />
            </Route>
            <Route path="/gallery">
            <PhotoGallery photos={photos} />
            </Route>
            <Route path="/contact" >
            <Breadcrumb/>
            <Contact />
            </Route>
            <Route path="/sitemap">
              <Sitemap />
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
        </Switch>
        <Footer/>
    </div>
  );}

export default App;
