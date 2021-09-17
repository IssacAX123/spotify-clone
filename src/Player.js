import React from 'react';
import './Player.css'
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player(props) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body/>
                <Footer/>
            </div>
        </div>
    );
}

export default Player;