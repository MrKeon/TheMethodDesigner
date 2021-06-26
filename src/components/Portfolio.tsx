import React from 'react';
import './Portfolio.css';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import SimplySweet from './portfolio/SimplySweet';

export default function Portfolio() {

    return(
      <div>
        <div className="Portfolio container">
          <div className="main">
            <div className="portfolio-main">
              <Link to={`/portfolio/simply-sweet-stems`}>
                <div className="portfolio-main-background" />
              </Link>
            </div>
          </div>
          <div className="side">
            <Link to={`/portfolio/pellegrino`}>
              <div className="Pellegrino"/>
            </Link>
            <div className="DoorDash" />
            <div className="DesignBasics"/>
          </div>
        </div>
      </div>
    );
  }
  