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

                <h2>Our candidates</h2>

                {/* ici tableau */}
                {this.state.isReady ? this.state.data.map(monster => (
                    <div className="listMonsters-card">

                        

                        <div className='imgParent'>
                            <div>
                                <img className="listMonsters-img" src={monster.picture} alt={monster.name} />
                            </div>
                            
                            <div class='overlay'>
                                <p className="listMonsters-stats">Lvl : {monster.level}</p>
                                <p className="listMonsters-stats">Atk : {monster.attack}</p>
                                <p className="listMonsters-stats">Defense : {monster.defense}</p>
                            </div>                            
                        </div>


                        <div>
                            <p className="listMonsters-name">{monster.name}</p>


                            <p>Special atk : {monster.special}</p>
                            <p>Description : {monster.description}</p>
                            <p>Download the CV : <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Here</a></p>
                        </div>


                    </div>
                ))

                    : 'ntm'}
            </div>

        )
    }
}

export default ListMonsters;