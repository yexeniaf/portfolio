import React from 'react'
import revogue from '../projects/revogue.png';

export default function Revogue() {
  return (
    <div className='project'>  
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> ReVogue</h1>
        <div className='info mt-2'>
            <p> Sustainability through fashion! The most recent app I created is inspired by a business venture slowly taking its shape. 
                ReVogue is an online thrift store where colleagues and I handpick clothing items and sell them. Our core mission is to help 
                gap and merge fashion with sustainability. </p>
            <div className='buttons flex my-2'>
                <button
                    className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                    onClick={() => {
                        window.location.href = "https://revogue.netlify.app/";
                    }}
                >
                    Deployed App
                </button>
                <button
                    className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                    onClick={() => {
                        window.location.href = "https://github.com/yexeniaf/ReVogue";
                    }}
                >
                    Github Repo
                </button>
            </div>
            <img src={revogue} alt='screehshot of ReVogue app' />
        </div>
    </div>
  )
}
