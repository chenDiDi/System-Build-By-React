import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
// import IndexPage from './routes/IndexPage';
import App from './routes/App';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  });
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  });
  const LoginPage = dynamic({
    app,
    // models: () => [
    //   import('./models/users'),
    // ],
    component: () => import('./routes/login'),
  });
  const UserPage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/user'),
  });

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/user" />)} />
            <Route exact path="/user" component={UserPage} />
            <Route exact component={error} />
          </Switch>
        </App>
      </Switch>
    </ConnectedRouter>
  );
}

RouterConfig.PropTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default RouterConfig;
