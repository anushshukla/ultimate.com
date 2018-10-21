import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import PageNotFound from './pages/PageNotFound';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import ErrorBoundary from './components/ErrorBoundary';
import initializeStore from './store';
// import LoadComponentIfCalled from './components/LoadComponentIfCalled';

const store = initializeStore();

const routes = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/register" exact component={SignUpPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  </ErrorBoundary>
);

export default hot(module)(routes);