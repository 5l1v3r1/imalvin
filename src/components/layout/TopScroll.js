import React, { Component } from 'react';
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
      <button onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })} className={classNames('scroll-top-btn', {show: this.state.scrolledHeight > 0 ? true : false})} style={{bottom: this.state.screenWidth * .025 + 'px'}}><i className="fas fa-angle-up"></i></button>
    )
  }
}

export default TopScroll;