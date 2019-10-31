import React from 'react';
import './Payment.css'

class Payment extends React.Component {
    render () {
        return(
            <div className ='listPayment'>
                <div className ='listOffers'>
                    <p>Bloody deal</p>
                    <p>20 currency/15.99$</p>
                    <button>Pay</button>
                </div>

                <div className ='listOffers'>
                    <p>Amazing deal</p>
                    <p>60 currency/35.99$</p>
                    <button>Pay</button>
                </div>

                <div className ='listOffers'>
                    <p>Black sabbath</p>
                    <p>100 currency/59.99$</p>
                    <button>Pay</button>
                </div>
                
            </div>
        )
    }
}

export default Payment;