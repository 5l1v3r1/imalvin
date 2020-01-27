import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Modal.css';

class Modal extends Component {
  render() {
    const { show, children } = this.props;
    
    return (
      <div className={classNames('modal', {'show-modal': (show ? true : false)})}>
        {children}
      </div>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Modal;