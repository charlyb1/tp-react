import React from "react";
import { Link } from 'react-router-dom'

const Nav = () =>
<div>
  <nav className="navbar navbar-expand">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/GestionEvent">Gestion des évènements</Link>
          </li>
          <li className="nav-item">
            <Link to="/HackersNews">HackersNews</Link>
          </li>
        </ul>
      </div>
    </nav>
</div>

export default Nav;
