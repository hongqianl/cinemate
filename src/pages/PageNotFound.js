import React from 'react';
import  PageNotFoundImage  from '../assets/page_not_found.jpg';
import { Link } from 'react-router-dom';
import { useTitle} from '../hooks/useTitle';
export function PageNotFound({title}) {

  useTitle(title);
  return (
    <main>
      <section className='flex flex-col justify-center py-2'>
        <div className='flex flex-col items-center py-4'>
          <p className='text-5xl dark:text-white text-slate-800 pb-10'>Opps...404</p>
          <div className='max-w-sm'>
            <img src={PageNotFoundImage} alt="Page Not Found"/>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Link to='./'>
            <button className='m-4 p-4 rounded-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:to-yellow-500'>Go back to Cinemate</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
