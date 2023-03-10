import React from 'react';
import { Logo } from './Logo/Logo.js';
import { AppNav } from './AppNav/AppNav.js';
import './NavBar.css';

export const NavBar = () => {
  return (
  <div id="nav">
    <div className="nav-left">
      <Logo/>
      <ul>
        <a className="navLink" href="https://github.com/LocalNewsTV/password-hasher">Repo</a>
        <a className="navLink" href="https://github.com/LocalNewsTV">GitHub</a>
        <a className="navLink" href="https://LocalNewsTV.github.io/">Portfolio</a>
      </ul>
    </div>
    <div className="nav-right">
      <AppNav/>
    </div>
  </div>
  )
}