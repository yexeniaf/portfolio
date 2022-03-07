import React from 'react';
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
        <div className="grid grid-cols-3 gap-3 m-4">
            <div className='gifs'>
                <div >
                <img src={mail} alt="email gif"/>
                </div>
                <p>yexeniaf@yahoo.com</p>
            </div>
            <div className='gifs'>
            <div >
            <img src={octocat} alt="github gif"/>
            </div>
                <p>https://github.com/yexeniaf</p>
            </div>
            <div className='gifs'>
            <div >
            <img src={linkedin} alt="linkedin gif"/>
            </div>
                <p>https://www.linkedin.com/in/yexenia-flores/</p>
            </div>
        </div>
        
    </div>
  )
}
