import { useEffect, useState } from 'react';

export function useMovie(id) {
    const [data, setData] = useState({});
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

    useEffect(()=>{
        const fetchMovie = async ()=> {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setData(json);
        };
        fetchMovie();
    }, []);

      return {data};
  }  



