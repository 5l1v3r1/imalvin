import React, { Component } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';

import './Header.css';

class Header extends Component {
  state = {
    size: window.innerWidth,
    show: false
  }

  handleResize = () => this.setState({size: window.innerWidth});

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const breakingPointPixel = 576;

    return (
      <div id="header">
        <div className={classNames('header-container', {open: (this.state.show && this.state.size <= breakingPointPixel ? true : false)})}>
          {this.state.size <= breakingPointPixel ? (
            <div onClick={() => this.setState({show: !this.state.show})} className="header-responsive-menu-wrapper">
              <div className={classNames('header-responsive-menu menu', { close: (this.state.show ? true : false) })}>
                <span className="header-responsive-menu-item header-responsive-menu-item-1"></span> 
                <span className="header-responsive-menu-item header-responsive-menu-item-2"></span>
                <span className="header-responsive-menu-item header-responsive-menu-item-3"></span>
              </div>
            </div>
          ) : null}
          {this.state.show || this.state.size > breakingPointPixel ? (
            <ul className="header-group">
              <li className="header-group-item">
                <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="header-group-item-link">SKILLS</Link>
              </li>
              <li className="header-group-item">
                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="header-group-item-link">PROJECTS</Link>
              </li>
              <li className="header-group-item">
                <Link to="educations" spy={true} smooth={true} offset={-70} duration={500} className="header-group-item-link">EDUCATIONS</Link>
              </li>
              <li className="header-group-item">
                <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className="header-group-item-link">CONTACT</Link>     
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Header;