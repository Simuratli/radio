import React,{ useState } from 'react'
import './SidebarList.css'
import ReactCountryFlag from "react-country-flag"
import {connect} from 'react-redux'
import {CHOSE_RADIO_STATION,PLAYING,VOLUME} from '../../Redux/actions/radio.action'
import {LOADING} from '../../Redux/actions/loading.action'

function SidebarList(props) {

    const [sidebar, setSidebar] = useState(false)

    function openRadioList(){
        setSidebar(!sidebar)
    }

    function clickRadioList(radio) {
        if(props.playing){
            props.onLoading(true) 
            props.onChoseRadioStation(radio)
        }else{
            props.onLoading(false) 
            props.onChoseRadioStation(radio)
        }
    }


    return (
        <div className="sidebar-list">
                <div className="sidebar-list-top">
                    <div onClick={openRadioList} className="sidebar-list-top-heading">
                        <div className='sidebar-list-top-button-container'>
                            <div className="sidebar-list-top-button"></div>
                        </div>
                        <div className="sidebar-list-country">
                        <ReactCountryFlag
                            svg
                            className="emojiFlag"
                            countryCode={props.radioStation ? props.radioStation.flag : 'JP'}
                            style={{
                                fontSize: '2em',
                                lineHeight: '2em',
                            }}
                            aria-label={props.radioStation ? props.radioStation.country : 'Japan'}
                        />
                            <h1>{props.radioStation ? props.radioStation.country : 'Chose Country'}</h1>
                        </div>
                    </div>
                    <ul className={`${sidebar && props.radioStation ? 'openRadios' : null}`}>
                    {props.radioStation && props.radioStation.radios.map((radio,index)=>{
                        return(
                            <li onClick={()=>{clickRadioList(radio)}} key={index}>{radio.name}</li>
                        )
                    })}
                    </ul>
                </div>
            </div>
    )
}
const mapStateToProps = (state) => {
    return {
        radioStation:state.RadioReducer.data,
        radio:state.RadioReducer.radio,
        loading:state.LoadingReducer.loading,
        playing:state.RadioReducer.playing,
        volume:state.RadioReducer.volume,
    }
}


const mapDispatchToProps = dispatch =>{
    return{
      onChoseRadioStation:(radio)=>{dispatch({type:CHOSE_RADIO_STATION,radio:radio})},
      onLoading:(loading)=>{dispatch({type:LOADING,loading:loading})},
      onPlayingChange:(playing)=>{dispatch({type:PLAYING,playing:playing})},
      onVolumeChange:(volume)=>{dispatch({type:VOLUME,volume:volume})},
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SidebarList)
