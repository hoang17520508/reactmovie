import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import MovieHeader from '../Components/MovieHeader';





export const HomeTemplate=(props)=>{
    const {Component,path}=props;
    return <Route path= {path} exact render ={(propsRoute)=>{
        return <div>
          <MovieHeader/>
            <Component {...propsRoute}/>
        </div>
    }}    />
}