import logo from './logo.svg';
import './App.css';
import FlightCanvas from './components/FlightCanvas/FlightCanvas';
import React from 'react'

function App() {
  return (
    <React.Fragment>
    <div className='flightContainer'>
    <FlightCanvas/>
    </div>
    </React.Fragment>
  );
}

export default App;
