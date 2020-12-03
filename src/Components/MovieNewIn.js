import React, { Component } from 'react'

export default class MovieNewIn extends Component {
    render() {
        return (
            <div>
         <div className="container mt-2" id="newin">
  <h1 className="newIn__title text-left">NEW IN</h1>
  <div className="row">
    <div className=" col-md-3 col-6   ">
      <div className="newIn__item">
        <div className="newIn__info">
          <img className="img-fluid" src="./img/movie-1.jpg" alt />
          <div className="newIn__overlay" />
          <div className="newIn__detail">
            <i className="fa fa-play" />
            <a href="#">Read More</a>
            <p>Release: 7 Mar 2020</p>
          </div>
        </div>
        <p className="newIn__item__title">The last post</p>
        <p className="newIn__item__rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </p>
      </div>
    </div>
    <div className=" col-md-3 col-6  ">
      <div className="newIn__item">
        <div className="newIn__info">
          <img className="img-fluid" src="./img/movie-2.jpg" alt />
          <div className="newIn__overlay" />
          <div className="newIn__detail">
            <i className="fa fa-play" />
            <a href="#">Read More</a>
            <p>Release: 7 Mar 2020</p>
          </div>
        </div>
        <p>The last post</p>
        <p>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </p>
      </div>
    </div>
    <div className=" col-md-3 col-6  ">
      <div className="newIn__item">
        <div className="newIn__info">
          <img className="img-fluid" src="./img/movie-3.jpg" alt />
          <div className="newIn__overlay" />
          <div className="newIn__detail">
            <i className="fa fa-play" />
            <a href="#">Read More</a>
            <p>Release: 7 Mar 2020</p>
          </div>
        </div>
        <p>The last post</p>
        <p>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </p>
      </div>
    </div>
    <div className=" col-md-3 col-6">
      <div className="newIn__item">
        <div className="newIn__info">
          <img className="img-fluid" src="./img/movie-4.jpg" alt />
          <div className="newIn__overlay" />
          <div className="newIn__detail">
            <i className="fa fa-play" />
            <a href="#">Read More</a>
            <p>Release: 7 Mar 2020</p>
          </div>
        </div>
        <p>The last post</p>
        <p>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </p>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}
