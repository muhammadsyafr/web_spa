import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Navigation from './Layout/Navigation';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import About from './Pages/About';
import Home from './Pages/Home';
import Porfof from './Pages/Porfof';

const App = () => (
  <div className='app'>
    <h1>React Router </h1>
    <Navigation />
    <MainNav />
  </div>
);

export default App;

const MainNav = () => (
  <Switch>
    <Route exact activeClassName="current" path='/' component={Porfof}></Route>
    <Route exact activeClassName="current" path='/education' component={Education}></Route>
    <Route exact activeClassName="current" path='/experience' component={Experience}></Route>
    <Route exact activeClassName="current" path='/about' component={About}></Route>
  </Switch>
);

// const MainNav = () => (
//   <nav>
//     <ul>
//       <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
//       <li><NavLink exact activeClassName="current" to='/education'>Education</NavLink></li>
//       <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
//     </ul>
//   </nav>
// );






