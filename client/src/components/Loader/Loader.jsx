import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => (
  <div className="pt-5 text-center">
    <Spinner animation="border" variant="secondary" size="lg" data-testid="spinner" />
  </div>
);

export default Loader;
