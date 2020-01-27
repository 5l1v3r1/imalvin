import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Skill.css';

class Skill extends Component {
  render() {
    const { icon, title, text } = this.props;

    return (
      <div className="skills-group-item">
        <object type="image/svg+xml" data={icon} className="skills-icon" height="50" width="50">
          {title} Icon
        </object>
        <div className="skills-group-item-container">
          <h3 className="skills-group-item-heading-3">{title}</h3>
          <hr className="hr-light" />
        </div>
        <p className="skills-group-item-paragraph">{text}</p>
      </div>
    )
  }
}

Skill.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Skill;