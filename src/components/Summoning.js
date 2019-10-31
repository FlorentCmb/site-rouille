// Importing librairies
import React from 'react'
import Axios from 'axios'
// import Sound from 'react-sound'

import Footer from './Footer'
// Importing CSS and ressources
import summonEffect2 from '../pictures/summonEffect2.gif'
import soulShard from '../pictures/soulShard.png'
import summonVideo from '../pictures/beforeSummonEffect.mp4'
import summonStarted from '../sounds/summonStarted.mp3'
import summonComing from '../sounds/summonComing3.mp3'
import summonFinished from '../sounds/summonFinished3.mp3'

import './Summoning.css'

export default class Summoning extends React.Component {

    state = {
        monsters: null,
        isReady: false,
        summonedMonsters: [],
        remainingShards: 5,
        toggleTeam: false,
        teamDisplay: 'none'
    }

    componentDidMount() {
        Axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
            .then(response => response.data)
            .then(data => {
                this.setState({ monsters: data.monsters, isReady: true })
            })
    }

    summon = () => {

        if (this.state.remainingShards > 0) {

            document.querySelector('.SummonedMonster').innerHTML = `
        <video autoplay="" loop="" muted="">
            <source type="video/mp4" src=${summonVideo} >
        </video>
        <audio class="Summoning-Audio" ref=”audio_tag” src=${summonComing} controls autoPlay/>
        <audio class="Summoning-Audio" ref=”audio_tag” src=${summonStarted} controls autoPlay/>
        `

            setTimeout(() => {// Checking if the user doesn't exceed the limit of the number of summons
                // Modifying the state in order to reduce the remaining summons
                this.setState({ remainingShards: this.state.remainingShards - 1 })

                // Creating a random number
                const randomNumber = (Math.floor(Math.random() * 20))

                // Display the summoned monster
                const monster = this.state.monsters[randomNumber]

                document.querySelector('.SummonedMonster').innerHTML = (
                    `<h3 class="Summoned-Title">You summoned...</h3>
                    <div class="Summoned-Card">
                        <img src=${monster.picture} alt=${monster.name} />
                        <h3><strong>${monster.name}</strong></h3>
                        <p>${monster.special !== "Nothing special" ? "Special skill : \"" + monster.special + "\"" : "Doesn't have any special skill"}</p>
                    </div>
                    <img src=${summonEffect2} class="summonEffect" alt="summon" />
                    <audio class="Summoning-Audio" ref=”audio_tag” src=${summonFinished} controls autoPlay/>`)

                // Adding the new monster to the owned monsters list
                this.setState({ summonedMonsters: this.state.summonedMonsters.concat(monster) })
            }, 5600)
        }
    }

    render() {

        return (
            <div className="Summoning">

                <div className="SummonedMonster"></div>

                <div className="Summoning-Section">
                    <button className="Summoning-Button" type="button" onClick={this.summon}>{this.state.remainingShards > 0 ? 'Summon a monster !' : 'You can\'t summon monsters anymore...'}</button>
                    <p>(Cost 1 soul shard <img style={{ width: '20px', height: 'auto' }} src={soulShard} alt='Soul shard' />. Remaining soul shards : {this.state.remainingShards} <img style={{ width: '20px', height: 'auto' }} src={soulShard} alt='Soul shard' />)</p>
                </div>
                <hr />
                <div className="Team-Container">
                    <h3>Your team :</h3>
                    <div className="Summoned-Team">
                        {console.log(this.state.summonedMonsters)}
                        {this.state.summonedMonsters.map((monster, index) => (
                            <div className="Monster-Card" key={index}>
                                <img src={monster.picture} alt={monster.name} />
                                <h3><strong>{monster.name}</strong></h3>
                                <p>{monster.description}</p>
                            </div>))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}