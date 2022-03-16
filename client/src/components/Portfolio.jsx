import React from 'react'

import Api from './Api';
import Game from './Game';
import Revogue from './Revogue';
import Tapas from './Tapas';


export default function Portfolio() {
  const handleClick = () => {
    window.open();
  };
  return (
    <div className='mb-5'>
      <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-10 mt-7">
            <h1 className="me-title about-title block text-white text-border-2 xl:inline "> PORTFOLIO:</h1>
          </div>
      <br/>
      <div className=" t-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      <Tapas />
      <Api />
      <Game />
      <Revogue />
      
    
      
      
      
    
      </div>
    </div>
  )
}
