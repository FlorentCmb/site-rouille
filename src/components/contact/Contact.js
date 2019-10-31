import React from 'react'

import Phone from './Phone'
import Ritual from './Ritual'
import Sacrifice from './Sacrifice'
import SendBlood from './SendBlood'

import Footer from '../Footer'

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
        console.log(this.state)
        return(
            <div className="parentMaster">
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
                        <div className="sacrifice" onClick={this.goSacrifice}>
                            <h2>Sacrifice</h2>
                                <div className="container"> 
                                    <img className="nav-image" src={sacrifice} alt="human sacrifice"/>
                                    <div className="overlay">
                                        <img src={skull} className="skull" alt="skull"/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="phone" onClick={this.goPhone}>
                            <h2>Phone</h2>
                                <div className="container">
                                    <img className="nav-image" src={phone} alt="phone"/>
                                    <div className="overlay">
                                        <img src={skull} className="skull" alt="skull"/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="send-blood" onClick={this.goSendBlood}>
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
                        <div className={this.state.ritual ? "ritualOn" : "ritualOff"}>
                            <Ritual />
                        </div>
                        <div className={this.state.sacrifice ? "sacrificeOn" : "sacrificeOff"}>
                            <Sacrifice />
                        </div>
                        <div className={this.state.phone ? "phoneOn" : "phoneOff"}>
                            <Phone />
                        </div>
                        <div className={this.state.blood ? "sendBloodOn" : "sendBloodOff"}>
                            <SendBlood />
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}