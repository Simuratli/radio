import * as actionTypes from '../actions/radio.action'

const initialState = {
    data:null,
    radio:null,
    playing:false,
    volume:1.0
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.CHOSE_RADIO:
            return{
                ...state,
                data:action.payload,
            }
        case actionTypes.CHOSE_RADIO_STATION:
            return{
                ...state,
                radio:action.radio,
            }
        case actionTypes.PLAYING:
            return{
                ...state,
                playing:action.playing,
            }
        case actionTypes.VOLUME:
                return{
                    ...state,
                    volume:action.volume,
                }
        default:
            return state;
    }
}

export default reducer