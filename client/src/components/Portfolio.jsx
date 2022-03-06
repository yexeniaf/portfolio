import React from 'react'
import {Link} from 'react-router-dom';

export default function Portfolio() {
  const handleClick = () => {
    window.open();
  };
  return (
    <div>
      <h1>My Portfolio</h1>
      <br/>
      <div className='project'>
        <Link to="https://yexeniaf.github.io/Tappas-and-Drinks/" target="_blank"> Tappas & Drinks</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      <br/>
      <div className='project'>
        <Link to="hhttps://ecstatic-leavitt-83dc15.netlify.app/" target="_blank"> API-N-Dex</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      <br/>
      <div className='project'>
        <Link to="https://competent-noyce-c7b535.netlify.app/" target="_blank"> Bored? Game!</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
      <br/>
      <div className='project'>
        <Link to="https://revogue.netlify.app/" target="_blank"> ReVogue</Link>
        <div className='info'>
          <p>Info here</p>
        </div>
      </div>
    </div>
  )
}
