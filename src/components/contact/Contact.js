import React from 'react'

import Phone from './Phone'
import Ritual from './Ritual'
import Sacrifice from './Sacrifice'
import SendBlood from './SendBlood'

import blood from '../../assets/icons/blood-transfusion.svg'
import pentacle from '../../assets/icons/pentacle-contact.gif'
import phone from '../../assets/pictures/phoneOld.jpg'
import sacrifice from '../../assets/pictures/sacrificeHuman.jpg'
import signInBlood from '../../assets/pictures/sign-in-blood.png'
import skull from '../../assets/icons/skull.gif'

import './Contact.css'

export default class Contact extends React.Component {
    state = {
        ritual: true,
        sacrifice: false,
        phone: false,
        blood: false
    }

    goRitual = () => {
        this.setState({
            ritual: true,
            sacrifice : false,
            phone : false,
            blood : false
        })
    }

    goSacrifice = () => {
        this.setState({
            ritual: false,
            sacrifice : true,
            phone : false,
            blood : false
        })
    }

    goPhone = () => {
        this.setState({
            ritual: false,
            sacrifice : false,
            phone : true,
            blood : false
        })
    }

    goSendBlood = () => {
        this.setState({
            ritual: false,
            sacrifice : false,
            phone : false,
            blood : true
        })
    }

    render(){
        return(
            <div>
                <img src={pentacle} alt="pentacle" />
                <div className="content-frame">
                    <div className="nav-contact">
                        <div className="ritual" onClick={this.goRitual} >
                            <h2>Ritual</h2>
                                <div className="container">
                                    <img className="nav-image" src={signInBlood} alt="hand writing with blood"/>
                                    <div className="overlay">
                                        <img src={skull} className="skull" alt="skull"/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="sacrifice">
                            <h2>sacrifice</h2>
                                <div className="container"> 
                                    <img className="nav-image" src={sacrifice} alt="human sacrifice"/>
                                    <div className="overlay">
                                        <img src={skull} className="skull" alt="skull"/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="phone">
                            <h2>Phone</h2>
                                <div className="container">
                                    <img className="nav-image" src={phone} alt="phone"/>
                                    <div className="overlay">
                                        <img src={skull} className="skull" alt="skull"/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="send-blood">
                            <h2>Blood donation</h2>
                                <div className="container">
                                    <img className="nav-image blood-image" src={blood} alt="blood bag"/>
                                    <div className="overlay">
                                        <img src={skull} className="skull" alt="skull"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="contact-components">
                        <Ritual className={this.state.ritual ? "ritualOn" : "ritualOff"} />
                        <Sacrifice className={this.state.ritual ? "sacrificeOn" : "sacrificeOff"} />
                        <Phone className={this.state.ritual ? "phoneOn" : "phoneOff"} />
                        <SendBlood className={this.state.ritual ? "sendBloodOn" : "sendBloodOff"} />
                    </div>
                </div>
            </div>
        )
    }
}