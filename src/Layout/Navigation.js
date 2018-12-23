import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="current" to='/education'>Education</NavLink></li>
        <li><NavLink activeClassName="current" to='/experience'>Experience</NavLink></li>
        <li><NavLink activeClassName="current" to='/about'>About</NavLink></li>
      </ul>
    </nav>
  );

  export default Navigation;