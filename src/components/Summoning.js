// Importing librairies
import React from 'react'
import Axios from 'axios'

// Importing CSS and styles
import './Summoning.css'
import summonEffect2 from '../pictures/summonEffect2.gif'

export default class Summoning extends React.Component {

    state = {
        monsters: null,
        isReady: false,
        summonedMonsters: [],
        summonsRemaining: 5,
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
        // Checking if the user don't exceed the limit of the number of summons
        if (this.state.summonsRemaining > 0) {
            // Modifying the state in order to reduce the remaining summons
            this.setState({ summonsRemaining: this.state.summonsRemaining - 1 })

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
                    <img src=${summonEffect2} class="summonEffect" alt="summon" />`)

            // Adding the new monster to the owned monsters list
            this.setState({ summonedMonsters: this.state.summonedMonsters.concat(monster) })
        }
    }

    render() {

        return (
            <div className="Summoning">

                <div className="SummonedMonster"></div>

                <div className="Summoning-Section">
                    <button className="Summoning-Button" type="button" onClick={this.summon}>{this.state.summonsRemaining > 0 ? 'Summon a monster !' : 'You can\'t summon monsters anymore...'}</button>
                    <p>(Summoning remaining : {this.state.summonsRemaining})</p>
                </div>

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
            </div>
        )
    }
}