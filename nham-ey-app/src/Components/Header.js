import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="background-image" />
        <div className="header-content">
          <nav className="nav-wrapper transparent">
            <div className="container">
              <ul>
                <li>
                  <a href="#">Featured</a>
                </li>
                <li>
                  <a href="#">Write a Review</a>
                </li>
                <li>
                  <a href="#">Post a Listing</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
              <i className="material-icons red-text right">gesture</i>
            </div>
          </nav>
          <div className="container search-bar">
            <div className="row">
              <div className="col s12 l6 center-align">
                <a href="#">
                  <h1 class="orange-text">Nham Ey?</h1>
                </a>
                <div className="minor-text white-text">
                  <p>"or"</p>
                </div>
                <form action="">
                  <div className="input-field">
                    <input type="text" className="white-text" id="search" />
                    <label htmlFor="search">Enter a location...</label>
                    <button className="btn red lighten-1">Go</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
