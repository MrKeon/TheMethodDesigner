import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Breadcrumb from './components/Breadcrumb';
import { photos } from './resources/photos';
import Sitemap from './components/Sitemap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimplySweet = lazy(() => import('./components/portfolio/SimplySweet'));
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Pellegrino = lazy(() => import('./components/portfolio/Pellegrino'));
const Doordash = lazy(() => import('./components/portfolio/Doordash'));
const DesignBasics = lazy(() => import('./components/portfolio/DesignBasics'));
const PhotoGallery = lazy(() => import('./components/Gallery'));



const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="app">
      <Header/>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/portfolio/simply-sweet-stems">
            <Breadcrumb/>
            <Suspense fallback={renderLoader()}>
              <SimplySweet/>
            </Suspense>
            </Route>
            <Route path="/portfolio/pellegrino">
            <Breadcrumb/>
            <Suspense fallback={renderLoader()}>
              <Pellegrino/>
            </Suspense>
            </Route>
            <Route path="/portfolio/doordash">
            <Breadcrumb/>
            <Suspense fallback={renderLoader()}>
              <Doordash/>
            </Suspense>
            </Route>
            <Route path="/portfolio/designbasics">
            <Breadcrumb/>
            <Suspense fallback={renderLoader()}>
              <DesignBasics/>
            </Suspense>
            </Route>
            <Route path="/about">
            <Suspense fallback={renderLoader()}>
              <About />
            </Suspense>
            </Route>
            <Route path="/portfolio">
            <Breadcrumb/>
            <Suspense fallback={renderLoader()}>
              <Portfolio />
            </Suspense>
            </Route>
            <Route path="/gallery">
            <Suspense fallback={renderLoader()}>
              <PhotoGallery photos={photos} />
            </Suspense>
            </Route>
            <Route path="/contact" >
            <Suspense fallback={renderLoader()}>
              <Contact />
            </Suspense>
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
