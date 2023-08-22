import { Card } from '../components/Card';
import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { useTitle} from '../hooks/useTitle';

export function MovieSearch({apiPath, title}) {
  const [searchParam] = useSearchParams();
  const searchTerm = searchParam.get('q');
  const {retData: movies} = useFetch(apiPath, `query=${searchTerm}`);
  useTitle(title);

  return (
    <div>
        <section>
          <div className='dark:text-white text-slate-700 text-3xl px-10'>
            {movies.length > 0 ? `Results for '${searchTerm}'` : `No results found for '${searchTerm}'`}
          </div>
        </section>
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


