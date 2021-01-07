import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../redux/actions/UserAction'
import MovieBookingHistory from './MovieBookingHistory';

class MovieHeader extends Component {
  logoutWeb=()=>{
    this.props.dispatch(logout());
  }
    render() {
        return (
            <div>
      <header className=" header">
  <div className="container ">
    <p className=" text-white text-right mb-0">
      
    <span className="mx-3 border-right pr-3 text-light">Hello, {this.props.credentials? this.props.credentials.hoTen:'' }</span>
    <button  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:'transparent'}} >  <i className="fa fa-user" /></button>
 

  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
   
    <Link to="/thongtindatve" className="dropdown-item"  >Booking History</Link>
    <a className="dropdown-item text-danger"  onClick={this.logoutWeb} >LogOut<i className="fa fa-sign-out-alt  ml-1" />
</a>

    
  </div>



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
            <a  className="nav-link" href="#coming">NEWS</a>
          </li>
          <li className="nav-item">
            <a  className="nav-link" href="#newin">WHAT'S ON</a>
          </li>
          <li className="nav-item">
            <Link to="/login" disabled={this.props.credentials? 'disable':''} className="nav-link" href="#login">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" disabled={this.props.credentials? 'disable':''} className="nav-link" href="#signup">SIGNUP</Link>
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
const mapStateToProps=state=>{
  return {
    credentials:state.UserReducer.credentials
  }
}


export default connect(mapStateToProps)(MovieHeader) ;