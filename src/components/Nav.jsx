import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <img src="logo.png" alt="" />
            </Link>
          </div>

          <div className="col-md-9">
            <ul className="list-inline right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Become a host</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
