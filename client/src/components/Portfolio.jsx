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
    <div className='mb-5'>
      <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-10">
            <h1 className="me-title about-title block text-white text-border-2 xl:inline"> PORTFOLIO:</h1>
          </div>
      <br/>
      <div className="t-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      <div className='project'>
        
        <a href="https://yexeniaf.github.io/Tappas-and-Drinks/" target="_blank"> Tappas & Drinks</a>
        <div className='info mt-2'>
          <p>Tappas and Drinks was the first app I have ever created and was an inspiration from my experience of not knowing what 
            to snack on! The app is designed to help users search for their desired drink, and it will generate a random snack to make. 
          </p>
          <img src={td} alt="screenshot of Tappas and Drink app"/>
        </div>
      </div>
      
      <div className='project'>
        
        <a href="https://ecstatic-leavitt-83dc15.netlify.app/" target="_blank"> API-N-Dex</a>
        <div className='info mt-2'>
          <p>This app was an inspiration from the first app I built. With multiple APIs, students can find it complicated and overwhelming
             to find ones that are free to use. API-N-Dex was created to be an app where users can post free APIs they find for others to
              use.
          </p>
          <img src={api} alt='screenshot of API-N-Dex app' />
        </div>
      </div>
      
      <div className='project'>
        
        <a href="https://competent-noyce-c7b535.netlify.app/" target="_blank"> Bored? Game!</a>
        <div className='info mt-2'>
          <p>Bored? Game! was a collaborative app where I worked with three talented software engineers. Users can play the game Risk 
            with friends around them! I worked on the frontend and was designated styling and some functionality. We plan to expand this 
            with more games in the future. 
          </p>
          <img src={game} alt='screehshot of Bored?Game! app' />
        </div>
      </div>
      
      <div className='project'>
        
        <a href="https://revogue.netlify.app/" target="_blank"> ReVogue</a>
        <div className='info mt-2'>
          <p> Sustainability through fashion! The most recent app I created is inspired by a business venture slowly taking its shape. 
            ReVogue is an online thrift store where colleagues and I handpick clothing items and sell them. Our core mission is to help 
            gap and merge fashion with sustainability. </p>
          <img src={revogue} alt='screehshot of ReVogue app' />
        </div>
      </div>
      </div>
    </div>
  )
}
