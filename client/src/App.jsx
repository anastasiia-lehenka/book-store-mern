import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCatalog from './containers/BookCatalog';
import BookDetails from './containers/BookDetails';
import Cart from './containers/Cart';
import Auth from './containers/Auth';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import './App.scss';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <ProtectedRoute exact path="/catalog" component={BookCatalog} token={token} />
        <ProtectedRoute exact path="/catalog/:id" component={BookDetails} token={token} />
        <ProtectedRoute exact path="/cart" component={Cart} token={token} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/">
          <Redirect to="/catalog" />
        </Route>
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
