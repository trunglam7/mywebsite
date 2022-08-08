import React from 'react'

import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='skills-header'>
        <h1 className='container-title'>Sample Projects</h1>
      </div>
      <div className='proj-grid'>
        <div className='projectBox'>
          <div className='proj-title'>Pokemon App</div>
          <div className='proj-desc'>
            <p>Using a RESTful API from pokeapi.co, this app, created through the React framework shows a list of every pokemon within their own box, along with their name, sprite and attributes.</p>
          </div>
          <div className='proj-tools'>
            <p>Tools:</p>
            <p>React, HTML, CSS, Javascript</p>
          </div>
          <div className='proj-link'>
            <a href='https://trunglam7.github.io/pokemon-app/' target='_blank' rel="noreferrer">Link to project</a>
          </div>
        </div>
        <div className='projectBox'>
          <div className='proj-title'>Crypto Fish Trader</div>
            <div className='proj-desc'>
              <p>Using a CoinGecko API, this python fish simulation will display two random cryptos from the top 50 cryptos based on market cap. Based on the set time duration users enter, which ever cryptocurrency that accumulates the time duration in total based on how long the fish was on their side, wins. </p>
            </div>
            <div className='proj-tools'>
              <p>Tools:</p>
              <p>Python, PyGame</p>
            </div>
            <div className='proj-link'>
              <a href='https://github.com/trunglam7/FishCryptoTraderV2' target='_blank' rel="noreferrer">Link to project</a>
            </div>
        </div>
        <div className='projectBox'>
            <div className='proj-title'>Adjust the Counters</div>
            <div className='proj-desc'>
              <p>A search problem using A* algorithm with several search heuristics where the objective is to solve a puzzle called the Adjust the Counters. The objective is given a N x N boards of tiles labeled from 1 to N, randomly, find the shortest amount of tile swap such that the board is sorted from left to right, top to bottom. More description of the puzzle is on the Github repo.</p>
            </div>
            <div className='proj-tools'>
              <p>Tools:</p>
              <p>C++</p>
            </div>
            <div className='proj-link'>
              <a href='https://github.com/trunglam7/AdjustTheCounters' target='_blank' rel="noreferrer">Link to project</a>
            </div>
        </div>
        <div className='projectBox'>
          <div className='proj-title'>Kanji Hunt</div>
          <div className='proj-desc'>
            <p>A 3D interactive game made in Unity with the purpose of learning new vocabularies for Japanese. All information about this game and the demo video link are in the Github repo.</p>
          </div>
          <div className='proj-tools'>
            <p>Tools:</p>
            <p>Unity, C#</p>
          </div>
          <div className='proj-link'>
            <a href='https://github.com/trunglam7/UnityProject_KanjiHunt' target='_blank' rel="noreferrer">Link to project</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills