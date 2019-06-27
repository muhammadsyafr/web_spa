import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Home from './ImmPages/Home';
import Commites from './ImmPages/Commites';
import FormPage from './ImmPages/FormPage';
import About from './ImmPages/About';

const App = () => (
  <div>
    <Navbar />
    <MainNav />
    <Footer />
  </div>
);

export default App;

const MainNav = () => (
  <Switch>
    <Route exact activeClassName="current" path='/' component={Home}></Route>
    <Route exact activeClassName="current" path='/commites' component={Commites}></Route>
    <Route exact activeClassName="current" path='/about' component={About}></Route>
    <Route exact activeClassName="current" path='/form-registration' component={FormPage}></Route>
  </Switch>
);








