import './App.css';
import Login from './Login';
import {useEffect} from "react";
import {getTokenFromURL} from "./spotify";
import {useState} from "react";
import Player from "./Player";
import SpotifyWebAPI from 'spotify-web-api-js';

const SPOTIFY = new SpotifyWebAPI();

function App() {
    const [token, setToken] = useState(null)
    useEffect(()=>{
        const hash = getTokenFromURL();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token){
            setToken(_token);
            SPOTIFY.setAccessToken(_token);
            SPOTIFY.getMe().then(r => console.log(r));
        }

    }, [])
  return (
    <div className="app">
        {token ? (<Player/>): <Login />}
    </div>
  );
}

export default App;
