import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper cyan lighten-3 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;
