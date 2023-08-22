import React, {useState,useEffect} from 'react';

export function useFetch(apiPath, queryParam="") {
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&${queryParam}`;
    const [retData, setRetData] = useState([]);

    useEffect(()=>{
        const fetchMovies = async ()=> {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setRetData(data.results);
        };
        fetchMovies();

    }, [url]);

  return {retData};
}


