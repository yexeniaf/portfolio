import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../gifs/mail.gif';
import octocat from '../gifs/octocat.gif'
import linkedin from '../gifs/linkedin.gif'


export default function Contact() {
    
  return (
    <div>
        <div>
        <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-10">
            <h1 className="me-title about-title block text-white text-border-2 xl:inline"> LETS CONNECT:</h1>
          </div>
          <br/>
        <p className='mb-5'> Whether it be a question about my work or just to grab coffee and chat, I am always happy to connect with you!</p>
        </div>
        <div className="t-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className='gifs'>
                <div className='resume-gif'>
                <img src={mail} alt="email gif"/>
                </div>
                <button 
                    className="sobutton inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400"
                    onClick={() => window.location = 'mailto:yexeniaf@yahoo.com'}
                >
                    Email Me
                </button>
            </div>
            <div className='gifs'>
                <div >
                    <img src={octocat} alt="github gif"/>
                </div>
                <button className="sobutton inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400">
                    <a href="https://github.com/yexeniaf" target="_blank">
                        Visit My Github
                    </a>
                </button>
            </div>
            <div className='gifs'>
            <div >
            <img src={linkedin} alt="linkedin gif"/>
            </div>
                <button className="sobutton inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400" > 
                    <a href="https://www.linkedin.com/in/yexenia-flores/" target="_blank">
                        Lets Connect
                    </a>
                </button>
            </div>
        </div>
        
    </div>
  )
}
