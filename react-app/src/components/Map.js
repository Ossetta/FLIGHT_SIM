import React from 'react'
import DrawingCanvas from './DrawingCanvas/DrawingCanvas'
import './Map.css'

const Map = () => {
  let gridLines = [];
  for (let i = 0; i < 9 * 9; i++) {
    gridLines.push(<div className="grid-line"></div>);
  }

  return (
    <div className='map'>
      <img src='./images/map.png' alt='map'/>
      <div className = 'gridilines'> </div>
      <DrawingCanvas />
    </div>
  )
}

export default Map



