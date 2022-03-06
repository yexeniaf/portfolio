import React from "react";
import headshot from '../images/headshot.png'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="about-title text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
          <h1 className="items-title about-title block text-white text-border-2 xl:inline">
            ABOUT
            <br className="hidden lg:inline-block" /> ME:
          </h1>
          </div>
          <p className="mb-8 leading-relaxed">
          I am a first-generation Mexican-American developer based in New York. Recently graduated from the Software Engineer Immersive program at General Assembly, 
          I am eager to take on my first role
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={headshot}
          />
        </div>
      </div>
    </section>
  );
}