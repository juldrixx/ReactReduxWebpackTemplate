import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

function Navbar() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
