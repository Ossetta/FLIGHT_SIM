import map from './map.webp'
import './FlightCanvas.css'
import Modal from 'react-modal';

// import Gridlines from 'react-gridlines'
import React,{useState} from 'react'

let FlightCanvas=()=>{
    let [showModal,setShowModal]=useState(false)
    let [modalValue,setModalValue]=useState(0)

    let dotClickHandler=(e)=>{
        console.log(e.target.id)
        setModalValue(e.target.id)
        setShowModal(true)
    }

    return(
        <React.Fragment>
        {/* <canvas/> */}
        <img src={map}></img>
        <div className='dot' id='one' onClick={dotClickHandler}></div>
        <div className='dot' id='two' onClick={dotClickHandler}></div>  
        <div className='dot' id='three' onClick={dotClickHandler}></div>
        {/* <Modal open={showModal}>{modalValue}</Modal>   */}
        {/* <Modal>HELLO</Modal> */}
        <p>done</p>
        </React.Fragment>      
    )
}
export default FlightCanvas