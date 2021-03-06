import React from 'react'
import td from '../projects/td.png';

export default function Tapas() {
  return (
    <div className='project'>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Tappas & Drinks</h1>
            <div className='info mt-2'>
                <p>Tappas and Drinks was the first app I have ever created and was an inspiration from my experience of not knowing what 
                    to snack on! The app is designed to help users search for their desired drink, and it will generate a random snack to make. 
                </p>
                <div className='buttons flex my-2'>
                    <button
                        className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                        onClick={() => {
                            window.location.href = "https://yexeniaf.github.io/Tappas-and-Drinks/";
                        }}
                    >
                        Deployed App
                    </button>
                    <button
                        className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                        onClick={() => {
                            window.location.href = "https://github.com/yexeniaf/Tappas-and-Drinks";
                        }}
                    >
                        Github Repo
                    </button>
                </div>
                <img 
                    src={td} 
                    alt="screenshot of Tappas and Drink app"
                />
            </div>
    </div>
  )
}
