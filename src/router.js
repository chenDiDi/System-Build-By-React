import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
// import LoginPage from './routes/login/Login';
// import IndexPage from './routes/IndexPage';
import App from './routes/App';

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
    // models: () => [
    //   import('./models/users'),
    // ],
    component: () => import('./routes/user'),
  });

  return (
    <Router history={history}>
      <switch>
        {/* <Route exact path="/" component={LoginPage} />*/}
        <Route exact path="/index" component={IndexPage} />
        <Route exact path="/" >
          <App>
            <Route exact path="/user" component={UserPage} />
          </App>
        </Route>
      </switch>
    </Router>
  );
}

export default RouterConfig;
