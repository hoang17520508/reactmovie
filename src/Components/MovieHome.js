import React, { Component } from 'react'
import Admin from '../Admin/Admin';
import MovieTest from './Data/MovieTest';
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
                <MovieShowTime />
                <MovieNewIn/>
                 
                
                <MovieComingSoon />
                <MovieContact />
                <MovieFooter />
               
            </div>
        )
    }
}
