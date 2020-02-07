import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Project.css';

class Project extends Component {
  render() {
    const { showModal, video, image, title, text, type, tools, onVideo, onGithub, github } = this.props;

    return (
      <div className="projects-item-card">
        <div className="project-item-card-container">
          <h3 className="projects-item-card-title">{title} ({type})</h3>
          <hr className="hr-dark" />
        </div>
        <div className="project-item-card-container">
          <img className="project-item-card-image" src={image} alt={title + ' Image'} />
        </div>
        <div className="project-item-card-container">
          <p className="projects-item-card-paragraph" dangerouslySetInnerHTML={{ __html: text}} />
        </div>
        <div className="project-item-card-container">
          <div className="project-item-card-action-container">
            {onVideo ? (
              <button onClick={showModal.bind(this, video)} className="action-button project-item-card-button">Video</button>
             ) : null}
            {onGithub ? (
              <a href={'https://github.com/' + github + '/' + title} target="_blank" rel="noopener noreferrer" className="project-item-card-button">Github</a>
            ) : null}
          </div>
        </div>
          <ul className="project-item-card-ul">
            {tools.map((tool, index) => <li key={index} className="project-item-card-li">{tool}</li>)}
          </ul>
      </div>
    )
  }
}

Project.propTypes = {
  showModal: PropTypes.func.isRequired,
  video: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  onVideo: PropTypes.bool.isRequired,
  onGithub: PropTypes.bool.isRequired
};

export default Project;