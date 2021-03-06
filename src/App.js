import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import ResponsiveHoverButton from './ResponsiveHoverButton.js';

import './App.css';
import logo from './head.png';

import iconGmaps from './icons/google_maps.svg';
import iconGmail from './icons/gmail.svg';
import iconGithub from './icons/github.svg';
import iconMedium from './icons/medium.svg';
import iconLinkedin from './icons/linkedin.svg';
import iconPdf from './icons/pdf.svg';

import projimgHalecoin from './projimg/halecoin.png';
import projimgMswords from './projimg/mswords.jpg';
import projimgMinisce from './projimg/minisce.png';
import projimgBusboss from './projimg/busboss.png';
import projimgFamilia from './projimg/familia.png';

/*
 *  Helper functions
*/

function bgimg(imgUrl) {
  return (imgUrl) ? 
    {backgroundImage: "url(" + imgUrl + ")"} : 
    {backgroundImage: "none"};
}

/*
 *  React components
*/

class SpinningHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 0.05,
    };
  }

  render() {
    let opts = {}; // TODO: click to make head spin faster
    return <img src={logo} className="photo" alt="logo" {...opts} />;
  }
}

function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <p className="title">I'm Michael Liu.</p>
        <p className="subtitle">Please hire me.</p>
      </div>
      <div className="header-logo">
        <SpinningHead />
      </div>
    </header>
  );
}

function Connections() {
  const conns = [
    { name: "Location", img: iconGmaps, url: "https://goo.gl/maps/MaMDzFZ8jtB2" },
    { name: "Email", img: iconGmail, url: "mailto:mike666234@gmail.com" },
    { name: "Github", img: iconGithub, url: "https://github.com/quasimik" },
    { name: "Medium", img: iconMedium, url: "https://medium.com/@quasimik" },
    { name: "LinkedIn", img: iconLinkedin, url: "https://www.linkedin.com/in/quasimik" },
    { name: "Resume", img: iconPdf, url: "https://drive.google.com/file/d/0B0k7_-vr1Q5MbVlGN252V3VaMXc/view" },
  ];

  const arr = conns.map(conn => 
    <ResponsiveHoverButton 
      type="connection" 
      circle={true} 
      breakpoint="32em" 
      url={conn.url} 
      imgUrl={conn.img} 
      title={conn.name} 
    />
  );

  return <div className="connections">{arr}</div>;
}

function Projects(props) {
  const projs = [
    { 
      name: "HaleCoin", 
      desc: "A custom crypto with unique socio-physical proof-of-work. Winner of HackUCI 2018.", 
      img: projimgHalecoin, 
      url: "https://github.com/quasimik/halecoin" 
    },
    { 
      name: "Letterpress-MCTS", 
      desc: "An AI agent employing Monte Carlo Tree Search (MCTS/UCT).", 
      img: projimgMswords, 
      url: "https://github.com/quasimik/letterpress-mcts" 
    },
    { 
      name: "Minisce", 
      desc: "An app to help you remember.", 
      img: projimgMinisce, 
      url: "https://play.google.com/store/apps/details?id=com.devostrum.minisce" 
    },
    { 
      name: "BusBoss", 
      desc: "A tool to optimize hackathon bus scheduling.", 
      img: projimgBusboss, 
      url: "https://github.com/quasimik/BusBoss" 
    },
    { //TODO
      name: "Familia", 
      desc: "A family tree builder.", 
      img: projimgFamilia, 
      url: "#" 
    },
  ];

  const arr = projs.map(proj => 
    <ResponsiveHoverButton 
      type="project" 
      breakpoint="48em" 
      url={proj.url} 
      imgUrl={proj.img} 
      title={proj.name}
      desc={proj.desc} 
    />
  );

  return <div className="projects">{arr}</div>;
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
