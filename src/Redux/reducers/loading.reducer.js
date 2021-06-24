import * as actions from '../actions/loading.action'
const initialState = {
    loading:false
}

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case actions.LOADING:
            return{
                ...state,
                loading:action.loading
            }
        default:
            return state;
    }
}


export default reducer