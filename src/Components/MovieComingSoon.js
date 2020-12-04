import React, { Component } from 'react';

export default class MovieComingSoon extends Component {
    render() {
        return (
            <div>
          <section className="comingSoon text-left" id="coming">
  <div className="coming__bg">
    <div className="container">
      <h1 className="section-title line">Coming Soon</h1>
      <div className="row">
        <div className="col-6 d-flex align-items-center ">
          <div className="coming__detail text-white">
            <span>COMEDY,CRIME</span>
            <h1 className="display-4">Hagover part II</h1>
            <p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <span className="coming__date">
                <i className="fa fa-calendar" />
                30 September,2017 
              </span>
            </p>
            <p>A dramatization of the April 2010 disaster, when the offshore drilling rig Deepwater Horizon exploded and created the worst oil spill in U.S. history.</p>
            <a href="#">MORE INFO <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-6 col-xs-12 ">
          <div className="coming__trailer">
            <img src="./img/slide-3-video.png" alt />
          
       
            <a className="video" href="https://vimeo.com/201050698" title="Test title"><i className="fa fa-play" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="coming__list">
    <div className="row">
      <div className=" col-md-2 col-6   ">
        <div className="coming__item">
          <div className="coming__info">
            <img className="img-fluid" src="./img/movie-6.jpg" alt />
            <div className="coming__overlay" />
          </div>
          <p>Deepwater horizon</p>
          <p>
            07 September,2017
          </p>
        </div>
      </div>
      <div className=" col-md-2 col-6   ">
        <div className="coming__item">
          <div className="coming__info">
            <img className="img-fluid" src="./img/movie-7.jpg" alt />
            <div className="coming__overlay" />
          </div>
          <p>Too Fast</p>
          <p>
            17 November,2017
          </p>
        </div>
      </div>
      <div className=" col-md-2 col-6   ">
        <div className="coming__item">
          <div className="coming__info">
            <img className="img-fluid" src="./img/movie-8.jpg" alt />
            <div className="coming__overlay" />
          </div>
          <p>Hangover</p>
          <p>
            04 September,2017
          </p>
        </div>
      </div>
      <div className=" col-md-2 col-6   ">
        <div className="coming__item">
          <div className="coming__info">
            <img className="img-fluid" src="./img/movie-9.jpg" alt />
            <div className="coming__overlay" />
          </div>
          <p>Transformer</p>
          <p>
            17 September,2017
          </p>
        </div>
      </div>
      <div className=" col-md-2 col-6   ">
        <div className="coming__item">
          <div className="coming__info">
            <img className="img-fluid" src="./img/movie-11.jpg" alt />
            <div className="coming__overlay" />
          </div>
          <p>End Of empire</p>
          <p>
            27 September,2017
          </p>
        </div>
      </div>
      <div className=" col-md-2 col-6   ">
        <div className="coming__item">
          <div className="coming__info">
            <img className="img-fluid" src="./img/movie-12.jpg" alt />
            <div className="coming__overlay" />
          </div>
          <p>The comdian</p>
          <p>
            21 November,2017
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
        )
    }
}
