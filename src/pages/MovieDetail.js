import React from 'react';
import { useParams } from 'react-router-dom';
import {useMovie} from '../hooks/useMovie';
import { useTitle} from '../hooks/useTitle';

export function MovieDetail({title}) {
  const {id} = useParams();
  const {data:movie} = useMovie(id);
  useTitle(movie.title);


  return (

 <div className="flex justify-center  flex-wrap py-5">
    <section className='max-w-sm'>
      <img className="rounded" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
    </section>
    <section className='max-w-2xl m-5 dark:text-white'>
          <h5 className="my-3 text-center lg:text-left text-4xl font-bold">{movie.title}</h5>
          <p className="my-5">{movie.overview}</p>
          {movie.genres ? <p>
            {movie.genres.map((g)=>(
              <span key={g.id} className='box-border border-2 m-5 p-2 border-gray-200 rounded dark:border-gray-600'>{g.name}</span>
            ))} 
          </p> : ''}


          <div className="flex items-center p-5">
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm font-medium text-gray-900  no-underline dark:text-white">{movie.vote_count} votes</span>
          </div>

          <p className='pl-5 py-1'><b>Runtime:</b> {movie.runtime} minutes</p>
          <p className='pl-5 py-1'><b>Budget:</b> {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(movie.budget)}</p>
          <p className='pl-5 py-1'><b>Revenue:</b> {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(movie.revenue)}</p>
          <p className='pl-5 py-1'><b>Release</b> Date: {movie.release_date}</p>
          <a className='pl-5 py-1' href={`https://www.imdb.com/title/${movie.imdb_id}`}>
          <b>IMDB Code:</b> {movie.imdb_id}</a>


              
          
    </section>
</div>
  );
}


