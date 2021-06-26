import React from 'react';
import HomePhoto from '../img/HomePhoto.svg';
import './About.css';

export default function About() {
    return(
    <div className="About">
      <div className="Main">
        <div className="Container">
          <h1>Get to know me!</h1>
          <h2>What I like to do for fun</h2>
          <ul>
            <li>Rockwall climbing with my Husband</li>
            <li>Spend time with our precious puppy Tano 🐾</li>
            <li>Photography</li>
            <li>Watch Star Wars and all things Marvel</li>
          </ul>
          <h2>What I want from a career</h2>
          <p>My goal as a user experience designer is to create websites with a team that aims to include, everyone.</p>
          <p>I have a passion for individuals who have a learning and/ or a physical disability. I know I have much to learn, but that's okay because I'm super excited.♡</p>
          <img aria-valuetext="Beach glass artistic photo." src={HomePhoto}/>
        </div>
      </div>
    </div>
    );
  }
  