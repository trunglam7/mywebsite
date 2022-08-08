import React from 'react'

import './Main.css'

import mainVideo from '../videos/CocoonOfChaos.mp4'
const Main = () => {
  return (
    <div className='main'>
        <div className='container'>
            <video loop muted autoPlay>
              <source src={mainVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='intro-statement'>
                <h1>Hi, my name is Trung Lam...</h1>
                <p>I am a programmer.</p>
                <p>I am an artist.</p>
                <p>I am a gamer.</p>
                <p>Welcome to my Homepage.</p>
                <p>Made using the React Framework.</p>
            </div>
        </div>
    </div>
  )
}

export default Main