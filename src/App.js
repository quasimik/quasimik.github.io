import React, { Component } from 'react';

// import logo from './logo.svg';
import logo from './head.png';
import iconGmaps from './icons/google_maps.svg';
import iconGmail from './icons/gmail.svg';
import iconGithub from './icons/github.svg';
import iconMedium from './icons/medium.svg';
import iconLinkedin from './icons/linkedin.svg';
import iconPdf from './icons/pdf.svg';

import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <p className="title">Michael Liu</p>
        <p className="subtitle">please hire me</p>
      </div>
      <div className="header-right">
        <img src={logo} className="photo" alt="logo" />
      </div>
    </header>
  );
}

function Connections() {
  var styleGmaps = {backgroundImage: "url(" + iconGmaps + ")"};
  var styleGmail = {backgroundImage: "url(" + iconGmail + ")"};
  var styleGithub = {backgroundImage: "url(" + iconGithub + ")"};
  var styleMedium = {backgroundImage: "url(" + iconMedium + ")"};
  var styleLinkedin = {backgroundImage: "url(" + iconLinkedin + ")"};
  var stylePdf = {backgroundImage: "url(" + iconPdf + ")"};
  return (
    <div className="connections">
      <a href="https://goo.gl/maps/MaMDzFZ8jtB2" className="connection" style={styleGmaps}>
        <p className="connection-text"></p>
      </a>
      <a href="mailto:mike666234@gmail.com" className="connection" style={styleGmail}>
        <p className="connection-text"></p>
      </a>
      <a href="https://github.com/quasimik" className="connection" style={styleGithub}>
        <p className="connection-text"></p>
      </a>
      <a href="https://medium.com/@quasimik" className="connection" style={styleMedium}>
        <p className="connection-text"></p>
      </a>
      <a href="https://www.linkedin.com/in/quasimik" className="connection" style={styleLinkedin}>
        <p className="connection-text"></p>
      </a>
      <a href="https://drive.google.com/file/d/0B0k7_-vr1Q5MbVlGN252V3VaMXc/view" className="connection" style={stylePdf}>
        <p className="connection-text"></p>
      </a>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Connections />
      </div>
    );
  }
}

export default App;
