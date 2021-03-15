import React from 'react'
import logo from '../assets/los-cocos-iso-footer.png'

const TopBar = () => {
    return (
        <div className="top-bar" >
            <ul>
                <li>Home</li>
                <li>Rooms</li>
                <li>Restaurant</li>
            </ul>
            <div className="top-logo" >
            <img src={logo} />
            <div style={{width:90}}>
            <span className="logo-text">Los Cocos</span><br/> 
            <small className="logo-sub">Bungalows</small>

            </div>
            </div>
            <ul>
                <li>Weddings</li>
                <li>Membership</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default TopBar
