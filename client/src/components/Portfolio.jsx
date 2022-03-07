import React from 'react'
import {Link} from 'react-router-dom';
import api from '../projects/api.png';
import game from '../projects/game.png';
import td from '../projects/td.png';
import revogue from '../projects/revogue.png';


export default function Portfolio() {
  const handleClick = () => {
    window.open();
  };
  return (
    <div>
      <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-10">
            <h1 className="me-title about-title block text-white text-border-2 xl:inline"> PORTFOLIO:</h1>
          </div>
      <br/>
      <div className="grid grid-cols-2 gap-3">
      <div className='project'>
        <img src={td} alt="screenshot of Tappas and Drink app"/>
        <Link to="https://yexeniaf.github.io/Tappas-and-Drinks/" target="_blank"> Tappas & Drinks</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      
      <div className='project'>
        <img src={api} alt='screenshot of API-N-Dex app' />
        <Link to="https://ecstatic-leavitt-83dc15.netlify.app/" target="_blank"> API-N-Dex</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      
      <div className='project'>
        <img src={game} alt='screehshot of Bored?Game! app' />
        <Link to="https://competent-noyce-c7b535.netlify.app/" target="_blank"> Bored? Game!</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      
      <div className='project'>
        <img src={revogue} alt='screehshot of ReVogue app' />
        <Link to="https://revogue.netlify.app/" target="_blank"> ReVogue</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      </div>
    </div>
  )
}
