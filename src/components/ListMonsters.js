import React from 'react';
import './ListMonsters.css';
import '../index.css'
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

                <h2 className='listMonsters-title'>Our candidates</h2>

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


                        <div className ='listMonsters-blabla'>
                            <div className='listMonsters-name-parent'>
                                <p className="listMonsters-name">{monster.name}</p>
                            </div>
                            
                            <div className='listMonsters-bio-parents'>
                                <p className="listMonsters-bio">Special skill : {monster.special}</p>
                                <p className="listMonsters-bio">Description : {monster.description}</p>
                                <p className="listMonsters-bio">Interested ? Click here to summon : <a  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Summoning gate</a></p>
                            </div>                            
                        </div>


                    </div>
                ))

                    : 'ntm'}
            </div>

        )
    }
}

export default ListMonsters;