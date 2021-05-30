import React, { Component } from 'react';

class Navbar extends Component {
  render() { 
    return ( 
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span className="badge badge-pill badge-secondary ml-2">{this.props.totalCounter}</span>
          </span>
        </div>
      </nav>
    );
  }
}
 
export default Navbar;