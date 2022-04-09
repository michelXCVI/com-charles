/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export const NavbarComponent: React.FC = () =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Michel Charles
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
    </li>*/}
            <li className="nav-item">
              <a className="nav-link" href="/resume">
                Resume
                </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}