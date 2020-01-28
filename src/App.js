import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Error404 from './components/errors/Error404';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route component={Error404}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;