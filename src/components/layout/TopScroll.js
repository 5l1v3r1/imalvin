import React, { Component } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';

import './TopScroll.css';

class TopScroll extends Component {
  state = {
    screenWidth: window.innerWidth,
    scrolledHeight: window.pageYOffset
  }

  handleResize = () => this.setState({screenWidth: window.innerWidth});

  handleScroll = () => this.setState({scrolledHeight: window.pageYOffset});

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Link to="header" spy={true} smooth={true} duration={500} className={classNames('scroll-top-btn', {show: this.state.scrolledHeight > 0 ? true : false})} style={{bottom: this.state.screenWidth * .025 + 'px'}}><i className="fas fa-angle-up"></i></Link>
    )
  }
}

export default TopScroll;