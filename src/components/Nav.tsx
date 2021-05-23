import {
    Link
  } from "react-router-dom";
  import Home from './Home';
  import About from './About';
  import Portfolio from './Portfolio';
  import Gallery from './Gallery';
  
  function Nav() {
    return (
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
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </nav>
            </div>
      );
}

export default Nav;