import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../logo.svg';
import './Home.css';
import { LinkContainer } from 'react-router-bootstrap';

export default function Home() {
    return (
      <div className="HomeContainer">
        <div className="Home">
          <div className="HomeBackground">
            <div className="HomeContent">
              <div className="Title">
                <h1>User Experience Designer X Rachel Sadatian</h1>
                <div className="Divide"/>
                <h2>Welcome, I am so glad you decided to stop by!
    Take a look around and get to know me.</h2>
              </div>
              <LinkContainer exact activeClassName="selected" to="/about">
                <Button variant="dark">About me</Button>
              </LinkContainer>
              </div>
            </div>
          </div>
      </div>
    );
  }
  