import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHome } from '../actions/homeActions';

import Header from './layout/Header';
import Footer from './layout/Footer';
import TopScroll from './layout/TopScroll';
import FrontPage from './sections/FrontPage';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Educations from './sections/Educations';

class Home extends Component {
  componentDidMount() {
    this.props.getHome();
  }

  render() {
    const { frontPage, skills, projects, educations, contactInfo } = this.props;

    return (
      <Fragment>
        <TopScroll />
        <Header />
        <FrontPage frontPage={frontPage} />
        <Skills skills={skills} />
        <Projects projects={projects} github={contactInfo.github} />
        <Educations educations={educations} />
        <Footer contactInfo={contactInfo} />
      </Fragment>
    )
  }
}

Home.propTypes = {
  getHome: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  frontPage: state.home.frontPage,
  skills: state.home.skills,
  projects: state.home.projects,
  educations: state.home.educations,
  contactInfo: state.home.contactInfo
});

export default connect(mapStateToProps, {getHome})(Home);