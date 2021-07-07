import React from 'react';
import Nav from './Nav';
import './Footer.css';
import cc from '../cc.svg';
import linkedin from '../linkedin.svg';
import instagram from '../instagram.svg';

export default function Footer() {
    return(
    <div className="Footer" >
      <Nav ascendingOrder={true} />
      <div>
        <strong>Greater Seattle Area</strong>
      </div>
      <div>
        <p>The Method Designer 2021 <img src={cc} className="cc" /></p>
      </div>
      <div className="SocialMedia">
        <a href="https://www.linkedin.com/in/mrssadatian/" target="_blank">
          <p>Linkedin</p>
          <img src={linkedin} className="linkedin" />
        </a>
        <a href="https://www.instagram.com/glp_princess/" target="_blank">
          <p>Instagram</p>
          <img src={instagram} className="instagram" />
        </a>
      </div>
    </div>
      );
  }
  