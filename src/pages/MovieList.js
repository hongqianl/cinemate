import { Card } from '../components/Card';
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useTitle} from '../hooks/useTitle';

export function MovieList({apiPath, title}) {

    const {retData: movies} = useFetch(apiPath);
    useTitle(title);

  return (
    <div>
        <section className="max-w-7xl py-7 mx-auto">
            <div className='flex flex-wrap justify-start'>
                {movies.map((x)=>{
                   return (  
                      <Card key={x.id} movie={x}></Card>)
                })}

            </div>
        </section>
    </div>
  );
}
