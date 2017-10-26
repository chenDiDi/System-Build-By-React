import 'babel-polyfill';
import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
app.use(createLoading({ effects: true }));
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
