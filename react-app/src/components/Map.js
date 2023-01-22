import React from 'react'
import DrawingCanvas from './DrawingCanvas/DrawingCanvas'

const Map = () => {
  return (
    <div className='map'>
      <img src='./images/map.png' alt='map'/>
      <DrawingCanvas />
    </div>
  )
}

export default Map
