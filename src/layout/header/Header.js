import React from "react";
import {withRouter, Link} from 'react-router-dom'

const Header = () => {
  return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar navigation-semi-transparent">
      <div className="container">
        <Link to='/' className="navbar-brand">
          Coding Challenges
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-default">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a>
                  <img src="../../assets/img/brand/blue.png" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="#">
                <i className="ni ni-favourite-28" />
                <span className="nav-link-inner--text d-lg-none">Discover</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="#">
                <i className="ni ni-notification-70" />
                <span className="nav-link-inner--text d-lg-none">Profile</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-link-icon"
                href="#"
                id="navbar-default_dropdown_1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ni ni-settings-gear-65" />
                <span className="nav-link-inner--text d-lg-none">Settings</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbar-default_dropdown_1"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
