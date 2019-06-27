import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-sm navbar-light bg-custom shadow">
  <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
    <a className="navbar-brand" href="/"><NavLink activeClassName="current" to='/home'></NavLink><img alt="logo" src="img/logo.jpg" className="img-brand" style={{width: '70px'}} /><NavLink activeClassName="current" to='/'></NavLink></a>
    {/* <a className="navbar-brand" href="#"><img src="img/logo.jpg" className="img-brand" style={{width: '70px'}} /></a> */}
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-md-0">
        {/* <li class="nav-item">
              <a class="nav-link" href="#">Apply</a>
          </li> if more than 5 menu in navbar class use navbar-expand-lg not sm  */}
        <li className="nav-item">
            <a className="nav-link" href="/"><NavLink activeClassName="current" to='/commites'>Committes</NavLink></a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/"><NavLink activeClassName="current" to='/'>Conference</NavLink></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/"><NavLink activeClassName="current" to='/about'>About Us</NavLink></a>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><NavLink activeClassName="current" to=''>Registration</NavLink></a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="/"><NavLink activeClassName="current" to='/form-registration'>Registration Form</NavLink></a>
            <a className="dropdown-item" href="/"><NavLink activeClassName="current" to='/'>Home</NavLink></a>
          </div>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><NavLink activeClassName="current" to=''>Document</NavLink></a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="/"><NavLink activeClassName="current" to='/form-registration'>Registration Form</NavLink></a>
            <a className="dropdown-item" href="/"><NavLink activeClassName="current" to='/'>Home</NavLink></a>
          </div>
        </li>

      </ul>
    </div>
  </div>
</nav>
  );

  export default Navbar;