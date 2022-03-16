import React from 'react';
import homepagePic from "../images/homepagePic.JPG"
import resume from '../gifs/resume.gif'
import LogoIcons from './LogoIcons';


export default function Home() {
    return (
        <div className='homepage'>
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="first-name text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Yexenia</span>{''}
                      <br/>
                      <span className="last-name block xl:inline">Flores</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Welcome and thank for visiting my portfolio!
                    </p>
                    <br/>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Pronouns: She/Her
                    <br/>
                    Nickname: Yeni
                    </p>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={homepagePic}
                alt=""
              />
            </div>
          </div>
          <br/>
          <br/>
          <div className='resume'>
            <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-4">
              <h1 className="items-title about-title block text-white text-border-2 xl:inline"> Resume:</h1>
            </div>

            <div className='resume-info'>
                <div className='resume-gif'>
              
                  <img src={resume} alt="resume gif" />
                 
                  <button className="sobutton inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-400 mb-3" > 
                    <a href="https://docs.google.com/document/d/1E7IxIu0kZskPEZjjhwj5Rxfv-LG_qkGE5ZyHhbJXzBY/edit?usp=sharing" target="_blank">
                        Click To View My Resume
                    </a>
                </button>
                   
                </div>
            </div>
          </div>
          <LogoIcons />
        </div>
      )
    }
