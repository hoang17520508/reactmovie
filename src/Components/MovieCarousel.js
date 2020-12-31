import React, { Component } from 'react';

class MovieCarousel extends Component {
    render() {
        return (
            <div>
           <section className="movieCarousel">
  {/* data-ride="carousel"  */}
  <div id="carouselMovie" className="carousel slide carousel-fade" data-ride="carousel">
    <ol className="container carousel-indicators">
      <li data-target="#carouselMovie" data-slide-to={0} className="active" />
      <li data-target="#carouselMovie" data-slide-to={1} />
      <li data-target="#carouselMovie" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/ca2.png" className="d-block w-100" alt="..." />
        
        <div className="overlay" />
      </div>
      <div className="carousel-item">
        <img src="./img/ca1.jpg" className="d-block w-100" alt="..." />
        
        <div className="overlay" />
      </div>
      <div className="carousel-item">
        <img src="./img/ca3.jpg" className="d-block w-100" alt="..." />
       
        <div className="overlay" />
      </div>
    </div>
  </div>
</section>

            </div>
        );
    }
}

export default MovieCarousel;