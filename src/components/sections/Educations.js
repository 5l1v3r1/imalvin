import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Education from './subSections/Education';
import Title from './helpers/Title';

import './Educations.css';

class Educations extends Component {
  state = {
    showHighSchool: false,
    showUniversity: false
  }

  showHighSchool = () => this.setState({showHighSchool: !this.state.showHighSchool});

  showUniversity = () => this.setState({showUniversity: !this.state.showUniversity});

  render() {
    return (
      <div id="educations">
        <div className="educations-container">
          <div className="educations-item">
            <Title title={'educations'} color={'light'} />
          </div>
          <div className="educations-item">
            {this.props.educations.map((education, index) => <Education key={index} education={education.education} name={education.name} from={education.from} to={education.to} flag={(education.education === 'High School' ? this.state.showHighSchool : this.state.showUniversity)} flagMethod={(education.education === 'High School' ? this.showHighSchool : this.showUniversity)} material={education.material} />)}
          </div>
        </div>
      </div>
    )
  }
}

Educations.propTypes = {
  educations: PropTypes.array.isRequired
};

export default Educations;