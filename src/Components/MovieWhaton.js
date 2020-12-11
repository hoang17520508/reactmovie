import React, { Component } from 'react'
import MovieCarousel from './MovieCarousel'
import MovieContact from './MovieContact'
import MovieShowTime from './MovieShowTime'

export default class MovieWhaton extends Component {
    render() {
        return (
            <div>
                <MovieCarousel/>
                <MovieShowTime/>
            </div>
        )
    }
}
