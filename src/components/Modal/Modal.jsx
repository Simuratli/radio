import './Modal.css';
import {connect} from 'react-redux'
import {MODAL_CLOSE} from '../../Redux/actions/modal.action'

function Modal(props) {
    return (
        <div className={`modal-outline animate__animated animate__fadeIn ${props.modal && 'modalOpen'}`}>
            <div className='modal'>
                <div className="modal-content">
                    <h1>{props.modalInfo && props.modalInfo.title}</h1>
                    <p>{props.modalInfo && props.modalInfo.text}</p>
                </div>
                <button onClick={()=>{props.onModalChange()}} className="modal-bottom">
                    Cancel
                </button>
            </div>  
        </div>
    )
}


const mapStateToProps = state => {
    return{
        modal:state.ModalReducer.modal,
        modalInfo:state.ModalReducer.info
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onModalChange:()=>{dispatch({type:MODAL_CLOSE})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)
