import React,{useState,useEffect} from 'react'
import {data} from '../../data'
import ReactMapGL,{Marker,Popup} from 'react-map-gl';


function Map() {
  const [showPopup, togglePopup] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 5,
    width:window.innerWidth,
    height:window.innerHeight,
  });

  const [dataC, setDataC] = useState([])

  useEffect(() => {
   
  function success(pos) {
    var crd = pos.coords;
    setViewport((prev)=>({
      ...prev,
      latitude:crd.latitude,
      longitude:crd.longitude
    }))

    setDataC(data)
  }


  navigator.geolocation.getCurrentPosition(success);
  }, [])  


 

  

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/mapbox/dark-v10'}
      mapboxApiAccessToken={'pk.eyJ1Ijoic2ltdXJhdGxpIiwiYSI6ImNrcGptNGNjaDM2ZXoyb2xscnIxbjhkbHUifQ.I-X57llzx1Z6Tq2Mb32UuQ'}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {
        dataC && dataC.map((country,index)=>{
          return(
            <Marker latitude={Number(country.lat)} longitude={Number(country.long)} offsetLeft={-5} offsetTop={-12}>
            <div className='dot'></div>
          </Marker>
          )
        })
      }
      
      {showPopup && <Popup
          latitude={37.78}
          longitude={-122.41}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="top" >
          <div className='dot'></div>
        </Popup>}
    </ReactMapGL>
  );
}

export default Map
