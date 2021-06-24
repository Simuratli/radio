import React from 'react'
import ReactHowler from 'react-howler'
import {connect} from 'react-redux'
import {CHOSE_RADIO_STATION,PLAYING,VOLUME} from '../../Redux/actions/radio.action'
import {LOADING} from '../../Redux/actions/loading.action'

function MP3Component(props) {
    return (
        <ReactHowler
                    src={[props.radio && props.radio.live]}
                    playing={props.playing}
                    html5={true}
                    volume={props.volume}
                    onPlay={()=>{props.onLoading(false) }}
                    onLoad={()=>{ props.onLoading(true)  }}
        />
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

export default connect(mapStateToProps,mapDispatchToProps)(MP3Component)
