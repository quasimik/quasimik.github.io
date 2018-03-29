import React, { Component } from 'react';
import './App.css';

// import logo from './logo.svg';
import logo from './head.png';
import iconGmaps from './icons/google_maps.svg';
import iconGmail from './icons/gmail.svg';
import iconGithub from './icons/github.svg';
import iconMedium from './icons/medium.svg';
import iconLinkedin from './icons/linkedin.svg';
import iconPdf from './icons/pdf.svg';


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
  const conns = [
    { icon: iconGmaps, url: "https://goo.gl/maps/MaMDzFZ8jtB2" },
    { icon: iconGmail, url: "mailto:mike666234@gmail.com" },
    { icon: iconGithub, url: "https://github.com/quasimik" },
    { icon: iconMedium, url: "https://medium.com/@quasimik" },
    { icon: iconLinkedin, url: "https://www.linkedin.com/in/quasimik" },
    { icon: iconPdf, url: "https://drive.google.com/file/d/0B0k7_-vr1Q5MbVlGN252V3VaMXc/view" },
  ];

  function bgicon(iconUrl) {
    return {backgroundImage: "url(" + iconUrl + ")"};
  }

  let arr = []
  for (let conn of conns) {
    arr.push(
      <a href={conn.url} className="connection" key={conn.url} style={bgicon(conn.icon)}>
        <p className="connection-text"></p>
      </a>
    );
  }
  return <div className="connections">{arr}</div>;
}

function Projects(props) {
  for (var i=0; i<5; i++) {
    return (
      <p>lmao {i}</p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Connections />
        <Projects />
      </div>
    );
  }
}

export default App;
