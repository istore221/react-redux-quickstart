import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store,{ history} from './store';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import Home from './components/pages/Home';



ReactDOM.render(
 <Provider store={store}>
   <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
  </ConnectedRouter>
 </Provider>,
 document.getElementById('app')
)
