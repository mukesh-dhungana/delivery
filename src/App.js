import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
