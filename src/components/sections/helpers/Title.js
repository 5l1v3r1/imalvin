import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './Title.css';

class Title extends Component {
  render() {
    const { title, color } = this.props;

    return (
      <Fragment>
        <h2 className={'heading-2-title heading-2-title-' + color}>{title.toUpperCase()}</h2>
        <div className={'heading-2-title-border-' + color}></div>
      </Fragment>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Title;