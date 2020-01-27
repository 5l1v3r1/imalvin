import React, { Component, Fragment } from 'react';
import { SlideDown } from 'react-slidedown';
import PropTypes from 'prop-types';

import 'react-slidedown/lib/slidedown.css';
import './Education.css';

class Education extends Component {
  render() {
    const { education, name, from, to, flag, flagMethod, material } = this.props;

    return (
      <ul className="education-list-group">
        <li onClick={flagMethod} className="education-list-group-item action-cursor">{education} Education &rarr; <i>{name} ({from}{to <= new Date().getFullYear() ? <Fragment>-{to}</Fragment> : <Fragment>~</Fragment>})</i></li>
        <SlideDown>
          {flag ? (
            <Fragment>
              {material.map((course, index) => (
                <Fragment key={index}>
                  {course.semester !== null ? <li className="education-list-group-item">- {course.semester} Semester</li> : null}
                  {course.courses.map((subCourse, subCourseIndex) => <li key={subCourseIndex} className={course.semester !== null ? "education-list-group-sub-item" : "education-list-group-item"}>- {subCourse.name} ({subCourse.grade})</li>)}
                </Fragment>
              ))}
            </Fragment>
          ) : null}
        </SlideDown>
      </ul>
    )
  }
}

Education.propTypes = {
  education: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
  flagMethod: PropTypes.func.isRequired,
  material: PropTypes.array.isRequired
};

export default Education;