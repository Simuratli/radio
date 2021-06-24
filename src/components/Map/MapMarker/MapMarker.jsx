import React from 'react'
import {Marker} from 'react-map-gl';

function openPP(country) {
    
}

function MapMarker(props) {
    return (
        <Marker key={props.index} latitude={Number(props.country.lat)} longitude={Number(props.country.long)} offsetLeft={-5} offsetTop={-12}>
              <div onClick={()=>{openPP(props.country)}} className='dot'></div>
        </Marker>
    )
}

export default MapMarker
