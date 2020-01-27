import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Skill from './subSections/Skill';
import Title from './helpers/Title';

import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <div className="skills-container">
          <div className="skills-item">
            <Title title={'skills'} color={'light'} />
          </div>
          <div className="skills-item">
            <div className="skills-group">
              {this.props.skills.map((skill, index) => <Skill key={index} icon={skill.icon} title={skill.title} text={skill.text}></Skill>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;