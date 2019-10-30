import React from 'react';
import './ListMonsters.css';
import axios from 'axios';

class ListMonsters extends React.Component {

    state = {
        data: [],
        isReady: false
    }

    componentDidMount() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters').then((response) => {
            this.setState({
                data: response.data.monsters, isReady: true
            })



        })
    }

    render() {
        return (

            <div>
                {this.state.isReady ? this.state.data.map(monster => (
                    <div className="card">
                        <p className="name">{monster.name}</p>
                        <img className="image" src={monster.picture} alt="" />
                        <p className="homeworld">Homeworld : {monster.level}</p>
                    </div>
                ))

                    : 'ntm'}
            </div>

        )
    }
}

export default ListMonsters;