import React,{useState,useEffect} from 'react'
import {data} from '../../data'
import ReactMapGL,{Marker,Popup,FlyToInterpolator} from 'react-map-gl';
import {easeCubic} from 'd3-ease';
import './Map.css'
import mapboxgl from "mapbox-gl";
//Redux
import {connect} from 'react-redux'
import {CHOSE_RADIO,CHOSE_RADIO_STATION} from '../../Redux/actions/radio.action'
import {LOADING} from '../../Redux/actions/loading.action'
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Map(props) {
  const [showPopup, togglePopup] = useState(null);
  
  const [viewport, setViewport] = useState({
    latitude: 35.652832,
    longitude: 139.839478,
    zoom: 5,
    width:window.innerWidth,
    height:window.innerHeight,
    transitionDuration: 1000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: easeCubic
  });

  const [dataC, setDataC] = useState([])

  useEffect(() => {
  
  // props.onChoseRadioStation(data[0].radios[0])
  // props.onChoseRadio(data[0])
  setDataC(data)
  }, [props])  
  
  function openPP(country){
    props.onChoseRadioStation(country.radios[0])
    props.onChoseRadio(country)
    !props.playing ? props.onLoading(false) : props.onLoading(true)
    togglePopup(country)
    setViewport((prev)=>({
      ...prev,
      latitude:Number(country.lat),
      longitude:Number(country.long),
      zoom: 5,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    }))
    

  }

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
            <Marker key={index} latitude={Number(country.lat)} longitude={Number(country.long)} offsetLeft={-5} offsetTop={-12}>
              <div onClick={()=>{openPP(country)}} className='dot'></div>
            </Marker>
          )
        })
      }


      {
        showPopup ? (
          <Popup onClose={()=>togglePopup(null)} latitude={Number(showPopup.lat)} longitude={Number(showPopup.long)}>
              <div className="popup">
                <h2>{showPopup.country}</h2>
                <img src={showPopup.image} alt={showPopup.country} />
                <p>
                  {showPopup.about}
                </p>
              </div>
          </Popup>
        ) : null
      }

    </ReactMapGL>
  );
}

const mapStateToProps = state =>{
  return{
      markers:state.MapReducer.data,
      loading:state.LoadingReducer.loading,
      playing:state.RadioReducer.playing
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onChoseRadio:(country)=>{dispatch({type:CHOSE_RADIO,payload:country})},
    onChoseRadioStation:(radio)=>{dispatch({type:CHOSE_RADIO_STATION,radio:radio})},
    onLoading:(loading)=>{dispatch({type:LOADING,loading:loading})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map)
