import './Sidebar.css'
import Menu from '../../Assets/Images/menu.svg'
import PlayButton from '../../Assets/Images/play.png'
import NextButton from '../../Assets/Images/right.png'
import PrevButton from '../../Assets/Images/left.png'
import {useState} from 'react'


function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const sidebarButton = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className={`sidebar ${sidebar && 'open'}`}>
            <div className="sidebar-menu">
                <div onClick={sidebarButton} className="hamburger">
                    <img src={Menu} alt="Menu" />
                </div>
            </div>
            <div className="sidebar-main">
                    <h1 className='logo'>
                       <a href="/"> Radio <br /> Shore</a>
                    </h1>

                    <input className='search-input' type="text" placeholder='Search Country' />
            
                <div className="player">
                    <img className='player-img' src="https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80" alt="Japan" />
                    <h1 className="player-title">JAPAN</h1>
                    <h2 className="player-subtitle">Tokyo radio</h2>
                    <div className="player-buttons">
                        <button className="prev">
                            <img src={PrevButton} alt="Prev" />
                        </button>
                        <button className="play">
                            <img src={PlayButton} alt="PLay" />
                        </button>
                        <button className="next">
                            <img src={NextButton} alt="Next" />
                        </button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Sidebar
