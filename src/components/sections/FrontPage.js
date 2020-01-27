import React, { Component } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

import './FrontPage.css';

class FrontPage extends Component {
  state = {
    word: 'Hi'
  }

  componentDidMount() {
    const words = ['Hi', 'Hej', 'Hola', 'Ciao', 'Salut'];
    let index = 0;

    setInterval(() => {
      if (index === (words.length - 1))
        index = 0;
      else
        index++;

      this.setState({word: words[index]});
    }, 1500);
  }

  render() {
    return (
      <div id="front-page">
        <div className="front-page-container">
          <div className="front-page-item">
            <h1 className="front-page-heading-1"><span className="front-page-span">{this.state.word}</span> I'm Alvin!</h1>
            <p className="front-page-paragraph front-page-sub-title">Let me show you around</p>
          </div>
          <div className="front-page-item">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="front-page-anchor-button">My Work</Link>
            <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className="front-page-anchor-button">Need Help?</Link>
          </div>
          <div className="front-page-item">
            <p className="front-page-paragraph">{this.props.frontPage.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

FrontPage.propTypes = {
  frontPage: PropTypes.object.isRequired
};

export default FrontPage;