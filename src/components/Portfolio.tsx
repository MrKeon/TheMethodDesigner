import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {

  return (
    <div>
      <div className="shell">
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
              <div className="PellegrinoPreview" />
            </Link>
            <Link to={`/portfolio/doordash`}>
              <div className="DoorDashPreview" />
            </Link>
            <Link to={`/portfolio/designbasics`}>
              <div className="DesignBasicsPreview" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
