import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import LoginPage from './routes/login/Login';
import IndexPage from './routes/IndexPage';
import App from './routes/App';

function RouterConfig({ history, app }) {
  // const IndexPage = dynamic({
  //   app,
  //   component: () => import('./routes/IndexPage'),
  // });
  //
  // const App = dynamic({
  //   app,
  //   component: () => import('./routes/App'),
  // });
  //
  // const LoginPage = dynamic({
  //   app,
  //   // models: () => [
  //   //   import('./models/users'),
  //   // ],
  //   component: () => import('./routes/login/Login'),
  // });

  return (
    <Router history={history}>
      {/* <switch>*/}
      <Route path="/" component={LoginPage} />
      <Route path="/index" component={IndexPage} />
      <Route path="/app" component={App} />
      {/* </switch>*/}
    </Router>
  );
}

export default RouterConfig;
