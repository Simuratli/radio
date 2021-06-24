import './Sidebar.css'
import Loader from '../Loader/Loader'
import SidebarPlayer from '../SidebarPlayer/SidebarPlayer'
import SidebarList from '../SidebarList/SidebarList'
import MP3Component from '../MP3Component/MP3Component'
// redux 
import {connect} from 'react-redux'
import {LOADING} from '../../Redux/actions/loading.action'


function Sidebar(props) {


    return (
        <div className='sidebar'>
            {
                props.loading ? <Loader/> : null
            }
            
            <MP3Component/>
            <SidebarList/>

            <br />
            <SidebarPlayer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading:state.LoadingReducer.loading,
    }
}


const mapDispatchToProps = dispatch =>{
    return{
      onLoading:(loading)=>{dispatch({type:LOADING,loading:loading})},
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
