import React from 'react'
import YouTube from 'react-youtube'

import './Sacrifice.css'

export default class Sacrifice extends React.Component {
    render(){
        const optsYou = {
            height: '345',
            width: '640',
            playerVars: "https://www.youtube.com/watch?v=IJNR2EpS0jw",
            autoplay: 1
        };

        return(
            <div className="sacrifice-container">
                <h2>Well it's pretty simple but please! Be innovative! you just have to die </h2>
                <h3>Here are a few tips:</h3>
                <a href="https://1000waystodie.fandom.com/wiki/Top_100_Deaths">-100 Fun ways to die</a>
                <p>Dumb ways to die:</p>
                <YouTube
                    videoId="IJNR2EpS0jw"
                    opts={optsYou}
                    onReady={this._onReady}
                />

            </div>
        )
    }
}