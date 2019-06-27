import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Navigation from './Layout/Navigation';
import Experience from './Pages/Experience';
import Educations from './Pages/Educations';
import About from './Pages/About';
import Index from './Pages/Index';

const App = () => (
  <div className='app'>
    <h1>React Routers </h1>
    <Navigation />
    <MainNav />
  </div>
);

export default App;

const MainNav = () => (
  <Switch>
    <Route exact activeClassName="current" path='/' component={Index}></Route>
    <Route exact activeClassName="current" path='/education' component={Educations}></Route>
    <Route exact activeClassName="current" path='/experience' component={Experience}></Route>
    <Route exact activeClassName="current" path='/about' component={About}></Route>
  </Switch>
);








