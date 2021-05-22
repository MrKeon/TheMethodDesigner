import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PhotoGallery from './components/Gallery';
import Footer from './components/Footer';

import './App.css';
import { getPhotos } from './util/util';

function App() {
  let photos = getPhotos();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/gallery">
            <PhotoGallery photos={photos} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );}

export default App;
