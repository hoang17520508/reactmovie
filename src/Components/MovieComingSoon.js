import React, { Component } from 'react';
import { connect, useSelector,useDispatch } from 'react-redux'

export default function MovieComingSoon(props)  {
  
  const linkTrailer=useSelector(state=>state.QuanLyPhimreducer.linkTrailer);
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
            {/* <a href="#">MORE INFO <i className="fa fa-angle-right" /></a> */}
          </div>
        </div>
        <div className="col-6 col-xs-12 ">
          <div className="coming__trailer">
            <img src="./img/slide-3-video.png" alt />
          
       
            <a className="video" href="https://www.youtube.com/embed/TP6MkGUZMQI" data-target="#movieTrailer" data-toggle="modal" title="Test title"><i className="fa fa-play" /></a>
           




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
  <div className="modal fade" id="movieTrailer" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    {/*Content*/}
    <div className="modal-content">
      {/*Body*/}
      <div className="modal-body mb-0 p-0">
        <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe className="embed-responsive-item" src={linkTrailer} allowFullScreen />
        </div>
      </div>
    </div></div></div>

</section>

            </div>
        )
    }

