import React from 'react';
import homepagePic from "../images/homepagePic.JPG"
import reactLogo from '../images/reactLogo.png';
import htmlLogo from '../images/htmlLogo.png';
import cssLogo from '../images/cssLogo.png';
import javascriptLogo from '../images/javascriptLogo.png';
import rubyLogo from '../images/rubyLogo.png';
import railsLogo from '../images/railsLogo.png';
import expressLogo from '../images/expressLogo.png';
import postLogo from '../images/postLogo.jpg';
import mongoLogo from '../images/mongoLogo.png';
import bootstrapLogo from '../images/bootstrapLogo.png';
import tailwindLogo from '../images/tailwindLogo.png';
import resume from '../gifs/resume.gif'


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
          <div>
            <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-4">
              <h1 className="items-title about-title block text-white text-border-2 xl:inline"> Resume:</h1>
            </div>
            <div className='resume-info'>
                <div className='resume-gif'>
                    <img src={resume} alt="resume gif"/>
                </div>
                <a href="https://github.com/yexeniaf" target="_blank"> View my Resume!</a>
            </div>
          </div>

          <div className='bg-white mx-3 p-4 mb-12' >
          <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mx-4">
            <h1 className="items-title about-title block text-white text-border-2 xl:inline"> SKILLS:</h1>
          </div>
          <br/>
            <div>
              <h1 className='mb-1'>Porgamming Languages</h1>
              
              <div className="grid grid-cols-7 gap-3">
                <div>
                  <img className="logo-images border-4 " src={reactLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={htmlLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={cssLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={javascriptLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={rubyLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={railsLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={expressLogo}/>
                </div>    
              </div>
             <br/>
             <h1 className='mb-1'> Databases & Frameworks</h1>
             <div className="grid grid-cols-8 gap-4">
                <div>
                  <img className="logo-images border-4 " src={postLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={mongoLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={bootstrapLogo}/>
                </div>  
                <div>
                  <img className="logo-images border-4 " src={tailwindLogo}/>
                </div>      
              </div>


            </div>
          </div>
        </div>
      )
    }
