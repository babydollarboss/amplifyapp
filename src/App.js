import React from 'react';
import logo from './logo.svg';
import telegram from './telegram.svg'
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <div className='head-line__text'>
          <span>BABY DOLLAR</span>
          <span className='glow'>BABY DOLLAR</span>
        </div>
        <div className='head-line__coming-soon'>COMING SOON</div>
      </div>
      <div className='social-links'>
        <a href="https://t.me/babydollarChat" target="_blank" rel="noreferrer">
          <img src={telegram} className="social-icon" alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default App;