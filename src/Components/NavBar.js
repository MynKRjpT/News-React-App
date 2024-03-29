import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Daily News - Techs ,Weather, Games and Politics--
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
