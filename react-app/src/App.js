import './App.css';
import Background from './components/Background';
import Map from './components/Map';
import Station from './components/Station'
import DrawingCanvas from './components/DrawingCanvas/DrawingCanvas';
import PlaneTable from './components/PlaneTable';
import StationTable from './components/StationTable';

function App() {

  return (
  <div className="container">
    {/* <Background/> */}
    <Map/>
    <PlaneTable/>
    <StationTable/>
    </div>
  );
}

export default App;
