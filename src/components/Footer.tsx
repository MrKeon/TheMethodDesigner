import React from 'react';
import Nav from './Nav';
import './Footer.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Footer() {
    return(
    <div className="Footer" >
      <Nav />
      <div>
        <strong>Greater Seattle Area</strong>
      </div>
      <div>
        <p>The Method Designer 2021</p>
      </div>
    </div>
      );
  }
  