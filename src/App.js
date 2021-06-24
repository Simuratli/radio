import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Map from './components/Map/Map'
import Modal from './components/Modal/Modal'
function App() {
  return (
    <div className="App">
      <Modal/>
      <Map/>
      <Sidebar/>
    </div>
  );
}

export default App;
