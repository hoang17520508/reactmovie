import React, { Component } from 'react'
import MovieBookingHistory from './MovieBookingHistory'

export default class MovieFooter extends Component {
    render() {
        return (
            <div>
 <footer>
  <div className="footer__content text-left" >
    <div className="container">
      <div className="row">
        <div className=" col-3  ">
          <p>GET IN TOUCH</p>
          <a href="#">FAQs</a><br />
          <a href="#">Give us feedback</a><br />
          <a href="#">Contact us</a><br />
        </div>
        <div className=" col-3  ">
          <p>About MOVIE STAR</p>
          <a href="#">About us</a><br />
          <a href="#">Find us</a><br />
          <a href="#">Schedule</a><br />
          <a href="#">News</a><br />
        </div>
        <div className=" col-3  ">
          <p>LEGAL STUFF</p>
          <a href="#">Terms &amp; Conditions</a><br />
          <a href="#">Privacy policy</a><br />
          <a href="#">Cookie policy</a><br />
        </div>
        <div className=" col-3  ">
          <p>CONNECT WITH US</p>
          <a href="https://www.facebook.com/profile.php?id=100005380215006"><span><i className="fab fa-facebook" /> Facebook</span></a> <br />
          <a href="#"><span><i className="fab fa-twitter" />Twitter</span></a> <br />
          <a href="#"><span><i className="fab fa-google-plus" />Google +</span></a> <br />  
        </div>
      </div>
      <hr />
      <h6>2020 © Movie App / Web App UIT</h6>
    </div>
  </div></footer>

            </div>
        )
    }
}
