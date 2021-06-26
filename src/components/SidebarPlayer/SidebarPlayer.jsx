import React,{useState} from 'react'
import './SidebarPlayer.css'
import {connect} from 'react-redux'
import Info from '../../Assets/Images/info.png'
import Heart from '../../Assets/Images/heart.png'
import PlayButton from '../../Assets/Images/play.png'
import NextButton from '../../Assets/Images/right.png'
import PrevButton from '../../Assets/Images/left.png'
import PauseButton from '../../Assets/Images/pause.png'
// Redux 
import {CHOSE_RADIO_STATION,PLAYING,VOLUME} from '../../Redux/actions/radio.action'
import {LOADING} from '../../Redux/actions/loading.action'
import {MODAL_OPEN,MODAL_ADD_INFO} from '../../Redux/actions/modal.action'

function SidebarTop(props) {
    const [number, setNumber] = useState(2)

    function handlePlay () {
        if(props.radio){
            if(props.playing){
                props.onPlayingChange(!props.playing)
                props.onLoading(false) 
            }else {
                props.onPlayingChange(!props.playing)
                props.onLoading(true) 
            }
        }else{
            props.onModalOpen()
            props.addModalInfo({
                title:"Attention!",
                text:"Please chose country"
            })
        }
        
    }


    function changeLocalRadio(params) {
        props.onLoading(true)
        if(params === 'next'){
            setNumber(number + 1)
            // if(number === Number(props.radioStation.radios.length)){
            //     setNumber(1)
            // }
            props.radioStation && props.radioStation.radios.map((radio)=>{
                if(number === radio.id){
                    props.onChoseRadioStation(radio)
                }   
                return  null
            })
        }else{
            // if(number === 1){
            //     setNumber(Number(props.radioStation.radios.length))
            // }
            setNumber(number - 1)
            props.radioStation && props.radioStation.radios.map((radio)=>{
                if(number === radio.id){
                    props.onChoseRadioStation(radio)
                }  
                return  null
            })
        }
        console.log(number);
    }


    return (
        <div className="sidebar-player">
                 <div className="sidebar-player-left">
                     <div className="sidebar-player-head">
                        <h1 className='sidebar-radio-name'>{props.radio ? props.radio.name : 'Radio FM'}</h1>
                        <h6 className="sidebar-country-name">{props.radioStation ? props.radioStation.country : "Chose Country"}</h6>
                     </div>
                     <div className="sidebar-player-control">
                         <button onClick={()=>{changeLocalRadio('prev')}} ><img  src={PrevButton} alt="prev" /></button>
                         <button><img onClick={handlePlay} src={props.playing ? PauseButton : PlayButton} alt="play button" /></button>
                         <button onClick={()=>{changeLocalRadio('next')}}><img  src={NextButton} alt="next button" /></button>
                         <input 
                            type="range" 
                            min='0'
                            max='1'
                            step='.05'
                            value={props.volume}
                            onChange={e => {props.onVolumeChange(parseFloat(e.target.value))}} 
                            />
                     </div>
                 </div>
                <div className="sidebar-player-right">
                    <button><img src={Heart} alt="Heart button" /></button>
                    <hr />
                    <button><img src={Info} alt="Info button" /></button>
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
      onModalOpen:()=>{dispatch({type:MODAL_OPEN})},
      addModalInfo:(info)=>{dispatch({type:MODAL_ADD_INFO,info:info})},
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(SidebarTop)
