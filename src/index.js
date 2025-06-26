import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import { ThemeProvider } from './ThemeContext';
import './theme.css';

ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>

), document.getElementById('root'));
