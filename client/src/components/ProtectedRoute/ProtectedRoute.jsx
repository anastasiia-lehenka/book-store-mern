import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  token,
  exact,
  path,
}) => (
  <Route exact={exact} path={path}>
    { token
      ? <Component />
      : <Redirect to="/auth" />}
  </Route>
);

ProtectedRoute.defaultProps = { exact: false };

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

export default ProtectedRoute;
