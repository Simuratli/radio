import {MODAL_OPEN,MODAL_CLOSE,MODAL_ADD_INFO} from '../actions/modal.action'

const initalState = {
    modal:false,
    info:null
}


const reducer = (state=initalState,action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return{
                ...state,
                modal:true
            }
        case MODAL_CLOSE:
            return{
                ...state,
                modal:false
            }
        case MODAL_ADD_INFO:
            return{
                ...state,
                info:action.info
            }
        default:
            return state;
    }
}

export default reducer