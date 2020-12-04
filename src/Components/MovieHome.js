import React, { Component } from 'react'
import MovieCarousel from './MovieCarousel';
import MovieComingSoon from './MovieComingSoon';
import MovieContact from './MovieContact';
import MovieFooter from './MovieFooter';
import MovieHeader from './MovieHeader';
import MovieNewIn from './MovieNewIn';
import MovieShowTime from './MovieShowTime';


export default class MovieHome extends Component {
    render() {
        return (
            <div>
                <MovieCarousel />
                <MovieNewIn />
                 
                <MovieShowTime />
                <MovieComingSoon />
                <MovieContact />
                <MovieFooter />

            </div>
        )
    }
}
