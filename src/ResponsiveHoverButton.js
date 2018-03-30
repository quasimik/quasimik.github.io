/*
 * React component: ResponsiveHoverButton
 *
 * Large display mode:
 *   Image button. Hover -> description text overlays on image.
 * Small display mode (at specified breakpoint):
 *   Block-level component. Image and description side-by-side.
 *
 * Props:
 *   type: string. Custom type of the component, for custom styling.
 *   circle: bool. Option to make images circular.
 *   breakpoint: int/string. Large -> small mode switch breakpoint, e.g. "900px" or "48em".
 *   url: string. Button URL.
 *   imgUrl: string. URL where image is at.
 *   title: string. Text title.
 *   desc: string/null. Text description.
 *   //Large display mode border & radius
 *   ...
 *   
 * Styles to be defined in .css:
 *   Large icon width and height: .rhb-type-[NAME].rhb.rhb-lg {height:250px;width:250px;}
 *   
*/

import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './ResponsiveHoverButton.css';

class ResponsiveHoverButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      circle: (this.props.circle ? true : false),
    };
  }

  onMouseEnterHandler = () => { // Funky syntax to bind "this"
    this.setState({hover: true});
  }

  onMouseLeaveHandler = () => {
    this.setState({hover: false});
  }
  
  attrs = (tabletAndAbove) => {
    // User-defined type-specific styles
    let str = " rhb-type-" + this.props.type;

    // Breakpoint styles
    if (tabletAndAbove)
      str += " rhb-lg";
    else
      str += " rhb-sm";

    // Hover styles
    if (this.state.hover)
      str += " rhb-hover";

    // Circular RHB option
    if (this.state.circle)
      str += " rhb-circle";

    return str;
  }

  render() {
    let desc = (tabletAndAbove) => { // Conditionally render description text
      if (!this.props.desc) {
        return;
      }
      return <p className={"rhb-txt rhb-txt-desc" + this.attrs(tabletAndAbove)}>{this.props.desc}</p>;
    }

    let text = (tabletAndAbove) => { // Conditionally render text
      if (!this.props.title) {
        return;
      }
      return (
        <div className={"rhb-txt-ctnr" + this.attrs(tabletAndAbove)}>
          <p className={"rhb-txt rhb-txt-title" + this.attrs(tabletAndAbove)}>{this.props.title}</p>
          {desc(tabletAndAbove)}
        </div>
      );
    }

    return (
      <MediaQuery minWidth={this.props.breakpoint}>
      {(tabletAndAbove) => {
        return (
          <a href={this.props.url} className={"rhb" + this.attrs(tabletAndAbove)}
              onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
            <div className={"rhb-img-ctnr" + this.attrs(tabletAndAbove)}>
              <img className={"rhb-img" + this.attrs(tabletAndAbove)} src={this.props.imgUrl} />
            </div>
            {text(tabletAndAbove)}
          </a>
        );
      }}
      </MediaQuery>
    );
  }
}

export default ResponsiveHoverButton;
