import React from 'react';
import {NavLink} from 'react-router-dom'
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light pl-3 pr-3 pt-0 pb-0">

        <NavLink className="navbar-brand" exact to="/">Ecomm</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link p-3" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-3" to="/list">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-3" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
