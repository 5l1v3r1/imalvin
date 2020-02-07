import React, { Component } from 'react';
import { Player } from 'video-react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import Project from './subSections/Project';
import Modal from './helpers/Modal';
import Title from './helpers/Title';

import 'video-react/dist/video-react.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

import poster from '../../public/images/poster.png';

class Projects extends Component {
  state = {
    show: false,
    video: null
  }

  showModal = video => this.setState({show: true, video});

  hideModal = () => this.setState({show: false});

  render() {
    const carouselSettings = {
      dots: true,
      autoplay: true,
      arrows: true,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1483,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <div id="projects">
        <div className="projects-container">
          <div className="projects-item">
            <Title title={'projects'} color={'dark'} />
          </div>
          <div className="projects-item">
            {this.state.show ? (
              <Modal show={this.state.show}>
                <Player playsInline poster={poster} src={this.state.video} />
                <div onClick={this.hideModal} className="modal-close">Close</div>
              </Modal>
            ) : (
              <Slider {...carouselSettings}>
                {this.props.projects.map((project, index) => <Project key={index} showModal={this.showModal} image={project.image} video={project.video} title={project.title} text={project.text} type={project.type} tools={project.tools} onVideo={project.onVideo} onGithub={project.onGithub} github={this.props.github} />)}
              </Slider>
            )}
          </div>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired
};

export default Projects;