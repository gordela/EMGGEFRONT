import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import auth from "../services/authService";

class NavBar extends Component {
  state = {
    user: {
      _id: "",
      bag: "",
      email: "",
      isAdmin: "",
      name: "",
    },
    isOpen: false,
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="fluid-container navv fixed-top bg-emg-blue">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    HOME
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/about"
                    id="aboutus"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ABOUT US
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="aboutus">
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/about", hash: "#whoweare" }}
                    >
                      WHO WE ARE
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/about", hash: "#governance" }}
                    >
                      GOVERNANCE
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/about", hash: "#strategicvision" }}
                    >
                      STRATEGIC VISION
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/about", hash: "#qualityandpermits" }}
                    >
                      QUALITY AND PERMITS
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/about", hash: "#partners" }}
                    >
                      PARTNERS
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{ pathname: "/about", hash: "#branches" }}
                    >
                      BRANCHES
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to="/activities" className="nav-link">
                    ACTIVITIES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link">
                    PROJECTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/news" className="nav-link">
                    NEWS & MEDIA
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/career" className="nav-link">
                    CAREER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    CONTACT
                  </NavLink>
                </li>
                <li className={this.state.isOpen ? "search open" : "search"}>
                  <input type="search" className="search-box" />
                  <span className="search-button" onClick={this.handleSearch}>
                    <span className="search-icon"></span>
                  </span>
                </li>
              </ul>
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    REGISTER
                  </a>
                </li> */}

                {this.props.user.isAdmin && (
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">
                      LOGOUT
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="http://portal.emg.ge">
                    PORTAL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://ge.emg.ge">
                    GE
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
