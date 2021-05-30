import React, { Component } from 'react';

/** 
 * As there is no state we are using here so we could define it as 
 * Stateless Functional Component
 */
const Navbar = (props) => {
  return ( 
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge badge-pill badge-secondary ml-2">{props.totalCounter}</span>
        </span>
      </div>
    </nav>
  );
}
 
export default Navbar;