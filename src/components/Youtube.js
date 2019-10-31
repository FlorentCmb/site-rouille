import React from 'react'
import Youtube from'react-youtube'
import './Youtube.css'

export default class Video extends React.Component {
    render(){
        const optsYout = {
            height: '345',
            width: '640',
            playerVars: "https://youtu.be/IJkBZSylSsw",
            autoplay: 1
        };
        return(
            <div className='video-parent'>
                <h2 className="textVidéo">Typical day with our team </h2>
                <Youtube
                    videoId="IJkBZSylSsw"
                    opts={optsYout}
                    onReady={this._onReady}
                />
            </div>
        )
    }
}