import {data} from '../../data'
import * as actionTypes from '../actions/map.action'

const initialState = {
    data:null,
    loading:true
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.FETCH_MARKER:
            return{
                ...state,
                data:data,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer