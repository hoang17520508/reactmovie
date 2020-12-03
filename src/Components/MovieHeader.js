import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';


class MovieHeader extends Component {
    render() {
        return (
            <div>
      <header className=" header">
  <div className="container ">
    <p className=" text-white text-right mb-0">
      <i className="fas fa-phone-alt" />
      <span className="mx-3 border-right pr-3">01212001011</span>
      <i className="fa fa-user" />

    </p>
    <nav className="navbar navbar-expand-lg navbar-dark  ">
      <a className="navbar-brand" href="#">
        <img src="./img/logo.svg" alt /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="movieNavBar">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">HOME</Link>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#newin">NEW</a>
          </li>
          <li className="nav-item">
            <Link to="/test" className="nav-link" href="#coming">WHAT'S ON</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" href="#login">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link" href="#signup">SIGNUP</Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* <p class="bg-dark text-white text-right container-fluid">
  <i class="fas fa-phone-alt"></i>
    <span>01212001011</span>
    <i class="fa fa-search"></i>
    </p> */}
  </div>
</header>

            </div>
        );
    }
}

export default MovieHeader;