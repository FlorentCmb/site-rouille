import React from 'react'
import './SendBlood.css'

export default class SendBlood extends React.Component {
    render(){
        return(
            <div className ='listOffers'>
                <p>Lack soul shards to summon powerful   monsters ? Try donating your blood !</p>

                <div className='bloodOffers'>
                    <div className ='bloodText'>
                        <p>Bloody Mary deal</p>
                        <p>5 soul shards for 1L of blood !</p>
                    </div>

                    <div className ='bloodButton'>
                        <button>Give blood</button>
                    </div>
                    
                    
                </div>

                

                

            </div>
        )
    }
}