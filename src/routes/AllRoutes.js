import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {MovieSearch, MovieDetail, MovieList, PageNotFound } from '../pages';

export function AllRoutes() {
  return (
    <main className='main dark:bg-slate-800'>
        <Routes>
            <Route path="" element = {<MovieList apiPath='movie/now_playing' title='Now Playing'/>}/>
            <Route path="/search" element= {<MovieSearch apiPath='search/movie' title='Search Movies'/>}/>
            <Route path="/movies/popular" element= {<MovieList apiPath='movie/popular' title='Popular Movies'/>}/>
            <Route path="/movies/top" element= {<MovieList apiPath='movie/top_rated' title='Top Movies'/>}/>
            <Route path="/movies/upcoming" element= {<MovieList apiPath='movie/upcoming' title='Upcoming'/>}/>
            <Route path="/movie/:id" element= {<MovieDetail title='Movie Details'/>}/>
            <Route path="*" element= {<PageNotFound title='Page Not Found - Cinemate'/>}/>
        </Routes>
    </main>
  );
}


