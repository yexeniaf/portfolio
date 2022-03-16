import React from 'react'
import game from '../projects/game.png';

export default function Game() {
  return (
    <div className='project'>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Bored? Game!</h1>
        <div className='info mt-2'>
          <p>Bored? Game! was a collaborative app where I worked with three talented software engineers. Users can play the game Risk 
            with friends around them! I worked on the frontend and was designated styling and some functionality. We plan to expand this 
            with more games in the future. 
          </p>
          <div className='buttons flex my-2'>
                    <button
                        className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                        onClick={() => {
                            window.location.href = "https://competent-noyce-c7b535.netlify.app/";
                        }}
                    >
                        Deployed App
                    </button>
                    <button
                        className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                        onClick={() => {
                            window.location.href = "https://github.com/yexeniaf/BoredGame-Frontend";
                        }}
                    >
                        Github Repo
                    </button>
                </div>
          <img src={game} alt='screehshot of Bored?Game! app' />
        </div>
    </div>
  )
}
