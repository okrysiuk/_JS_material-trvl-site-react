import React from 'react';
import './../app/app.scss';
import Button from './../button';
import './landing-section.scss';

// ! After h1 tag <video src='./../../assets/videos/video-1.mp4' autoPlay loop muted />

function LandingSection() {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default LandingSection;