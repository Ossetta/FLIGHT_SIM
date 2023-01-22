import React from 'react'
import { useRef } from 'react'
import './DrawingCanvas.css'
import Station from '../Station'
import styles from '../styles.css'



const DrawingCanvas = () => {
    const canvasRef = useRef(null);
  return (
    <React.Fragment>
    <Station/>
    <canvas className="canvascontainer">
    </canvas>
    </React.Fragment>
  )
}

export default DrawingCanvas
