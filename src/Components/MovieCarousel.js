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
        <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
        <div className="container  carousel-caption d-none d-md-block">
          <p className="text-warning">ACTION, ADVENTURE, FANTASY</p>
          <h2 className="display-4">End of the World: Part II</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare
            quam littera gothica, quam nunc putamus parum.</p>
          <div>
            <span className="border rounded-circle  ">PG</span>
            <button className="btn-trailer"><i className="fa fa-play mr-2" />Play Trailer</button>
          </div>
        </div>
        <div className="overlay" />
      </div>
      <div className="carousel-item">
        <img src="./img/hero-2.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <p>ACTION, ADVENTURE, FANTASY</p>
          <h2>End of the World: Part II</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare
            quam littera gothica, quam nunc putamus parum.</p>
          <div>
            <span className="border rounded-circle">PG</span>
            <button className="btn-trailer"><i className="fa fa-play" />Play Trailer</button>
          </div>
        </div>
        <div className="overlay" />
      </div>
      <div className="carousel-item">
        <img src="./img/hero-3.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <p>ACTION, ADVENTURE, FANTASY</p>
          <h2>End of the World: Part II</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare
            quam littera gothica, quam nunc putamus parum.</p>
          <div> 
            <span className="border rounded-circle">PG</span>
            <button className="btn-trailer"><i className="fa fa-play" />Play Trailer</button>
          </div>
        </div>
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