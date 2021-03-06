import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
const routing = (
  <Router>
  <React.StrictMode>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
    <Footer/>
  </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))