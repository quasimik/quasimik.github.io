import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

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
    { img: iconGmaps, url: "https://goo.gl/maps/MaMDzFZ8jtB2" },
    { img: iconGmail, url: "mailto:mike666234@gmail.com" },
    { img: iconGithub, url: "https://github.com/quasimik" },
    { img: iconMedium, url: "https://medium.com/@quasimik" },
    { img: iconLinkedin, url: "https://www.linkedin.com/in/quasimik" },
    { img: iconPdf, url: "https://drive.google.com/file/d/0B0k7_-vr1Q5MbVlGN252V3VaMXc/view" },
  ];

  const arr = conns.map(conn => 
    <a href={conn.url} className="connection" key={conn.url} style={bgimg(conn.img)}>
      <p className="connection-text"></p>
    </a>
  );

  return <div className="connections">{arr}</div>;
}

class Project extends Component { // Needs to be a class to store hover state
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onMouseEnterHandler = () => { // Funky syntax to bind "this"
    this.setState({hover: true});
  }

  onMouseLeaveHandler = () => {
    this.setState({hover: false});
  }
  
  render() {
    return (
      <MediaQuery maxWidth="48em">
      {(mobileAndBelow) => {
        if (mobileAndBelow) return ( // Mobile(-): Images and description side-by-side
          <a href={this.props.project.url} className="project">
            <div className="project-image-container-mobile-down">
              <img className="project-image-mobile-down" src={this.props.project.img} />
            </div>
            <div className="project-text-container-mobile-down">
              <p className="project-text project-title">{this.props.project.name}</p>
              <p className="project-text">{this.props.project.desc}</p>
            </div>
          </a>
        );
        else /* (!mobileAndBelow) */ return ( // Tablet(+): Hover over images to show description
          <a href={this.props.project.url} className="project" 
              onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} 
              style={bgimg(this.state.hover ? null : this.props.project.img)}>
            <p className="project-text project-title">{this.props.project.name}</p>
            <p className="project-text">{this.props.project.desc}</p>
          </a>
        );
      }}
      </MediaQuery>
    );
  }
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

  const arr = projs.map(proj => <Project project={proj} />);

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
