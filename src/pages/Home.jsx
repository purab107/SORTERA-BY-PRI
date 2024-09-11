import React from 'react'
import './styling/Home.css';
import graphAnimation from '../assets/graphAnimation.mp4'

const Home = () => {

  const handleClick = () => {
    window.location.href = '/index.html', '_blank', 'noopener,noreferrer';
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">Sortera</h1>
          <p className="subtitle">Visualize Sorting Algorithms</p>
          <p className="description">Chat to start writing, planning, learning, and more with Google AI</p>
          <button className="direct-button" onClick={handleClick}>Try Sortera Now</button>
        </div>
        <div className="image-section">
          <video autoPlay muted loop>
            <source src={graphAnimation} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default Home