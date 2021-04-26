import React from 'react';
import './styles.scss';
import notFoundImage from '../../assets/images/gandalf.png';

const NotFound = () => (
  <div className="not-found wrapper">
    <img src={notFoundImage} alt="gandalf not found" />
    <div className="message">
      <h1 className="mb-4" data-testid="not-found-heading">404 - You Shall Not Pass</h1>
      <p data-testid="not-found-text">
        Uh oh, Gandalf is blocking the way!
        <span className="d-block">Maybe you have a typo in the url? Or you meant to go to a different location?</span>
      </p>
    </div>
  </div>
);

export default NotFound;
