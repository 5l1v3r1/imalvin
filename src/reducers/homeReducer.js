import { GET_HOME } from '../actions/types';

import web from '../public/svg/web.svg';
import desktop from '../public/svg/desktop.svg';
import mobile from '../public/svg/mobile.svg';
import deployment from '../public/svg/deployment.svg';
import planning from '../public/svg/planning.svg';
import collaboration from '../public/svg/collaboration.svg';

import consoleImage from '../public/images/alvin.png';
import webImage from '../public/images/ff_15_boosting.png';
import webImage2 from '../public/images/alvin_media.png';

import webVideo from '../public/videos/ff15_boosting.mp4';
import webVideo2 from '../public/videos/alvin_media.mp4';

const initialState = {
  frontPage: {
      text: 'I\'m a collage student Studying Data & Systems Science in Stockholm, Sweden. I Develop advanced applications in a sustainable way for the web, desktop & mobile domain. With a passion for software development & everything in between.'
  },
  skills: [
    {
      icon: web,
      title: 'Web',
      text: 'The web is a large part of software development & a very flexible way to display ones work. I do alot of work on web, in different ways. Using Bootstrap, jQuery, Django & Postgresql for quick development with large amount of functionality. I use React, Redux, Express & MongoDB when developing in a more sustainable way, larger scale & with more time.'
    },
    {
      icon: desktop,
      title: 'Desktop',
      text: 'Desktop development gives alot of flexibility with the possibility of providing a unique experience with the access to more specific computer information & resources. I develop desktop applications with Electron along with React, Redux, Express & MongoDB for Electron almost requiring a single page application framework & React being a great choice.'
    },
    {
      icon: mobile,
      title: 'Mobile',
      text: 'Mobile is the future of software development, everyone uses a phone. But the web is also the future, i belive a combination is. Therefore i belive in the development of progressive web applications for the mobile domain, using web technologies in applications. I develop mobile applications using React Native resulting in a modern cross platform application.'
    },
    {
      icon: deployment,
      title: 'Deployment',
      text: 'When creating any application in any domain, it requires a server. When deploying i evaluate the situation & what hosting alternative would fit best. Also taking into consideration the expected traffic, along with setting up a firewall passing all data through Cloudflare.'
    },
    {
      icon: planning,
      title: 'Planning',
      text: 'When planning out an application, the first thing i do is understand the requirements of the application, then moving into making sketches & if neccesary creating a domain model or use cases for specific displaying interactions.'
    },
    {
      icon: collaboration,
      title: 'Collaboration',
      text: 'Collaberation is extremely prevalent in software development, i always use git when collaberating as it\'s the most established way to easily work together on projects. This is conjuction with great planning & communication provides the best conditions for a favorable end result.'
    }
  ],
  projects: [
    {
      image: consoleImage,
      video: null,
      title: 'Alvin',
      text: 'A low level networking protocol built upon the TCP protocol. Gives command to control power from the server managing multiple connected computers & automatically storing all collected data.',
      type: 'Console',
      tools: ['Python', 'Sockets'],
      onVideo: false,
      onGithub: true
    },
    {
      image: webImage,
      video: webVideo,
      title: 'FF15 Boosting',
      text: 'A web application allowing boosting services in League of Legends. The user selects an order & proceeds to track the order with data from the League of Legends API, with a built in admin area.',
      type: 'Web',
      tools: ['Django', 'PostgreSQL', 'jQuery', 'Booststrap'],
      onVideo: true,
      onGithub: false
    },
    {
      image: webImage2,
      video: webVideo2,
      title: 'Alvin Media',
      text: 'A grid based website with focus on design & neat animations, being the previous version of this website. A frontend website being fully responsive with all custom styling using SASS & jQuery.',
      type: 'Web',
      tools: ['jQuery', 'Sass'],
      onVideo: true,
      onGithub: false
    }
  ],
  educations: [
      {
        education: 'High School',
        name: 'System Development - Information & Media Technology',
        from: 2016,
        to: 2019,
        material: [
          {
            semester: null,
            courses: [
              {
                name: 'Computer & network technology',
                grade: 'A'
              },
              {
                name: 'English 5',
                grade: 'B'
              },
              {
                name: 'English 6',
                grade: 'B'
              },
              {
                name: 'English 7',
                grade: 'A'
              }
            ]
          },
          {
            semester: null,
            courses: [
              {
                name: 'Entrepreneurship',
                grade: 'C'
              },
              {
                name: 'Physics 1a',
                grade: 'C'
              },
              {
                name: 'Interface Design',
                grade: 'A'
              },
              {
                name: 'History 1a',
                grade: 'B'
              }
            ]
          },
          {
            semester: null,
            courses: [
              {
                name: 'Sports & Health 1',
                grade: 'B'
              },
              {
                name: 'Chemistry 1',
                grade: 'E'
              },
              {
                name: 'Math 1c',
                grade: 'E'
              },
              {
                name: 'Math 2c',
                grade: 'E'
              }
            ]
        },
        {
          semester: null,
          courses: [
            {
              name: 'Math 3c',
              grade: 'E'
            },
            {
              name: 'Programming 1',
              grade: 'A'
            },
            {
              name: 'Programming 2',
              grade: 'A'
            },
            {
              name: 'Religious knowledge 1',
              grade: 'C'
            }
          ]
        },
        {
          semester: null,
          courses: [
            {
              name: 'Social science 1b',
              grade: 'A'
            },
            {
              name: 'Swedish 1',
              grade: 'C'
            },
            {
              name: 'Swedish 2',
              grade: 'B'
            },
            {
              name: 'Swedish 3',
              grade: 'B'
            }
          ]
        },
        {
          semester: null,
          courses: [
            {
              name: 'Technique 1',
              grade: 'C'
            },
            {
              name: 'Web Server Programming 1',
              grade: 'A'
            },
            {
              name: 'Web Development 1',
              grade: 'A'
            },
            {
              name: 'Web Development 2',
              grade: 'A'
            }
          ]
        }
      ]
    },
    {
      education: 'University',
      name: 'Computer & Systems Science',
      from: 2019,
      to: 2022,
      material: [
        {
          semester: 'First',
          courses: [
            {
              name: 'Introduction to Computer & System Science',
              grade: 'C'
            },
            {
              name: 'IT in Organizations',
              grade: 'C'
            },
            {
              name: 'Object-oriented Analysis & Design',
              grade: 'D'
            },
            {
              name: 'Programming 1',
              grade: 'C'
            }
          ]
        }
      ]
    }
  ],
  contactInfo: {
    github: 'Alvin-22',
    discord: 'Alvin#8362',
    skype: 'alvin-2000'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      return {
        ...state
      };
    default:
      return state;
  }
}