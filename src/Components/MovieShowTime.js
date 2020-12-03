import React, { Component } from 'react'

export default class MovieShowTime extends Component {
    render() {
        return (
            <div>
     <section className="showTime text-left">
  <div className="container">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#mon" role="tab" aria-controls="home" aria-selected="true">MON</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link " id="home-tab" data-toggle="tab" href="#tue" role="tab" aria-controls="home" aria-selected="true">TUE</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link " id="home-tab" data-toggle="tab" href="#wen" role="tab" aria-controls="home" aria-selected="true">WED</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link " id="home-tab" data-toggle="tab" href="#thur" role="tab" aria-controls="home" aria-selected="true">THU</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link " id="home-tab" data-toggle="tab" href="#fri" role="tab" aria-controls="home" aria-selected="true">FRI</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link " id="home-tab" data-toggle="tab" href="#sat" role="tab" aria-controls="home" aria-selected="true">SAT</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link " id="home-tab" data-toggle="tab" href="#sun" role="tab" aria-controls="home" aria-selected="true">SUN</a>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="mon" role="tabpanel" aria-labelledby="profile-tab">
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <a href="#"><img src="./img/movie-11.jpg" className="img-fluid" alt /></a>
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>
                ACTION, ADVENTURE, FANTASY
              </span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span className="showTime__label">VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <a href="#"><img src="./img/movie-12.jpg" className="img-fluid" alt /></a>
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span className="showTime__label">VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
          <a href="#"><img src="./img/movie-13.jpg" className="img-fluid" alt /></a>
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span className="showTime__label">VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="tue" role="tabpanel" aria-labelledby="profile-tab">
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-12.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-11.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-13.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="wen" role="tabpanel" aria-labelledby="profile-tab">
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-11.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-12.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-13.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="thur" role="tabpanel" aria-labelledby="profile-tab"><div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-11.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-12.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-13.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div></div>
      <div className="tab-pane fade" id="fri" role="tabpanel" aria-labelledby="profile-tab"><div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-11.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-12.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-13.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div></div>
      <div className="tab-pane fade" id="sat" role="tabpanel" aria-labelledby="profile-tab"><div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-11.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-12.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-13.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div></div>
      <div className="tab-pane fade" id="sun" role="tabpanel" aria-labelledby="profile-tab"><div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-11.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-12.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row showTime__movie my-4">
          <div className="col-2">
            <img src="./img/movie-13.jpg" className="img-fluid" alt />
          </div>
          <div className="col-10">
            <div className="showTime__detail ">
              <span>ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4">It's over</h1>
              <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
              <a className="d-block mb-4" href="#">FULL SYNOPSIS 
                <i className="fa fa-angle-right" /></a>
              <div className="showTime__list d-flex justify-content-between align-items-center">
                <div>
                  <i className="fa fa-clock" />
                  <span>VIEWING TIMES</span>
                  <button className="btn mr-2">14:25</button>
                  <button className="btn mr-2">16:45</button>
                  <button className="btn mr-2">17:25</button>
                  <button className="btn mr-2">18:45</button>
                </div>
                <p className="showTime__lenght mr-2">105 MINS <span className="d-inline-block bg-dark text-white font-weight-bold ml-2">15</span></p>
              </div>
            </div>
          </div>
        </div> </div>
    </div>
  </div>
</section>


            </div>
        )
    }
}
