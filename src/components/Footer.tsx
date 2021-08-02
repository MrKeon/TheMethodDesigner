import React from 'react';
import Nav from './Nav';
import './Footer.css';
import cc from '../cc.svg';
import linkedin from '../linkedin.svg';
import instagram from '../instagram.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer" >
      <div className="mobile">
        <div className="LinksContainer">
        <Nav ascendingOrder={true} />
        <div className="FooterText">
          <div>
            <strong>Greater Seattle Area</strong>
          </div>
          <div>
            <p>The Method Designer 2021 <img src={cc} className="cc" /></p>
          </div>
          <div className="sitemap" >
            <NavLink exact activeClassName="selected" to={"/sitemap"}>Site Map</NavLink>
            </div>
        </div>
        <div className="SocialMedia">
          <div className="Linkedin">
            <a href="https://www.linkedin.com/in/mrssadatian/" target="_blank">
              <p>Linkedin</p>
              <img src={linkedin} className="linkedin" />
            </a>
          </div>
          <div className="Instagram">
            <a href="https://www.instagram.com/glp_princess/" target="_blank">
              <p>Instagram</p>
              <img src={instagram} className="instagram" />
            </a>
          </div>
        </div>
        </div>
        <div className="mobile text">
          <p>
            Photo credit: Unsplash x Edited X Elena Joland
            The Method Designer 2021    , All Rights Reserved
          </p>
          <a>
            Site Map
          </a>
        </div>
      </div>
    </div>
  );
}
