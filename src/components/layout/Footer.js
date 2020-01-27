import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

class Footer extends Component {
  render() {
    const { github, discord, skype } = this.props.contactInfo;

    return (
      <div id="footer">
        <div className="footer-container">
          <div className="footer-item">
            <p>&copy; {new Date().getFullYear()} {window.location.hostname.toUpperCase()}. ALL RIGHTS RESERVED.</p>
            <br />
          </div>
          <div className="footer-item">
            <ul className="footer-list-group">
              <li className="footer-list-group-item">
                <a href={'https://github.com/' + github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square footer-icon-size-2 footer-icon-color-1"></i><span className="title">{github}</span></a>
              </li>
              <li className="footer-list-group-item">
                <button className="action-button"><i className="fab fa-discord footer-icon-size footer-icon-color-2"></i><span className="title">{discord}</span></button>
              </li>
              <li className="footer-list-group-item">
                <a href={'skype:' + skype + '?add'}><i className="fab fa-skype footer-icon-size-3 footer-icon-color-3"></i><span className="title">{skype}</span></a>
              </li>
            </ul>
            <p className="footer-icon-undertext">MESSAGE ME HERE!</p>
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  contactInfo: PropTypes.object.isRequired
};

export default Footer;