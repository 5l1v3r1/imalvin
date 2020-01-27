import React from 'react';
import { Link } from 'react-router-dom';

import './Error404.css';

const Error404 = () => {
  return (
    <div id="error-404">
      <div className="error-404-container">
        <h1 className="error-404-heading-1"><span className="error-404-span">Error 404</span> &rarr; Page Not Found <i className="far fa-frown"></i></h1>
        <h4 className="error-404-heading-4">Do not worry, i know the way back from which you came!</h4>
        <Link to="/" className="error-404-redirect-link">Back Home</Link>
      </div>
    </div>
  )
}

export default Error404;