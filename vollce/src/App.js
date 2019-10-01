import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Settings from './pages/Settings';
import Home from './pages/Home';
import TheMap from './pages/TheMap';
import Trips from './pages/Trips';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/trips" component={Trips}/>
            <Route path="/map" component={TheMap}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </header>
        <footer className="flex-container" >
          <Link to="/trips"><img alt="trips" src="/images/beenhere.svg" /> </Link>
          <Link to="/map"><img alt="map" src="/images/map.svg" /></Link>
          <Link to="/dashboard"><img alt="dashboard" src="/images/navigation.svg" /></Link>
        </footer>
    </div>
    )
  }
}
