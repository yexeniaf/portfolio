import React from 'react'
import api from '../projects/api.png';

export default function Api() {
  return (
    <div className='project'>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Tappas & Drinks</h1>
        <div className='info mt-2'>
            <p>This app was an inspiration from the first app I built. With multiple APIs, students can find it complicated and overwhelming
                to find ones that are free to use. API-N-Dex was created to be an app where users can post free APIs they find for others to
                use.
            </p>
            <div className='buttons flex my-2'>
                    <button
                        className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                        onClick={() => {
                            window.location.href = "https://ecstatic-leavitt-83dc15.netlify.app/";
                        }}
                    >
                        Deployed App
                    </button>
                    <button
                        className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                        onClick={() => {
                            window.location.href = "https://github.com/yexeniaf/API-N-Dex";
                        }}
                    >
                        Github Repo
                    </button>
                </div>
            <img src={api} alt='screenshot of API-N-Dex app' />
        </div>
    </div>
  )
}
