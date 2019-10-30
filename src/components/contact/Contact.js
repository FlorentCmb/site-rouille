import React from 'react'
import './Contact.css'
import pentacle from '../../assets/icons/pentacle-contact.gif'

export default class Contact extends React.Component {
    render(){
        return(
            <div>
                <img src={pentacle} alt="pentacle" />
                <div className="content-frame">
                    <div className="nav-contact">

                    </div>
                    <div className="contact-components"></div>
                </div>
                
            </div>
        )
    }
}