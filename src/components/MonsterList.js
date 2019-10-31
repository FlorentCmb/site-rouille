import React from 'react';
import './MonsterList.css';
import '../index.css'
import axios from 'axios';


class MonsterList extends React.Component {

/* Tierlist which depends on lvl */

    tierList(bidule)  {
        if (bidule === '7') {
            return 'S';            
        } if (bidule === '5') { 
            return 'A';
        } if (bidule === '4') {
            return 'B';
        } if (bidule === '3') {
            return 'C';
        } if (bidule === '2') {
            return 'D';
        } else {
            return 'F';
        }
            
    }

    state = {
        data: [],
        isReady: false,
        
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
                    <div className='listMonsters-card'>

                        <div className='imgParent'>
                            <div>
                                <img className={monster.level === '7' ? 'listMonsters-img-s' : 'listMonsters-img'} src={monster.picture} alt={monster.name} />
                            </div>

                            <div class='listMonsters-overlay'>
                                <p className="listMonsters-stats">Lvl : {monster.level}</p>
                                <p className="listMonsters-stats">Atk : {monster.attack}</p>
                                <p className="listMonsters-stats">Defense : {monster.defense}</p>
                            </div>
                        </div>


                        <div className ='listMonsters-blabla'>
                            <div className={monster.level === '7' ? 'listMonsters-name-parent-s' : 'listMonsters-name-parent'}>
                                <p className="listMonsters-name">{monster.name}</p>
                            </div>
                            
                            <div className='listMonsters-bio-parents'>
                                <p className="listMonsters-bio">Special skill : {monster.special}</p>
                                <p className="listMonsters-bio">Description : {monster.description}</p>
                                <p className="listMonsters-bio" id='letter'>Tierlist : {this.tierList(monster.level)} </p>
                                <p className="listMonsters-bio">Interested ? Click here to summon : <a  href='./Summoning'>Summoning gate</a></p>
                            </div>                            
                        </div>


                    </div>
                ))

                    : 'ntm'}
            </div>

        )
    }
}

export default MonsterList;