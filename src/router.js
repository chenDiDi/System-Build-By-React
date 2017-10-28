import React from 'react';
import { Router, Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
// import IndexPage from './routes/IndexPage';
import App from './routes/App';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
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
      <switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/">
          <App>
            <Route exact path="/user" component={UserPage} />
          </App>
        </Route>
      </switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
