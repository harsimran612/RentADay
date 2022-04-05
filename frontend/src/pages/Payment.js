import React from 'react';
import './Payment.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Payment = props => {

    return (
    
    <div className="payment">
        <Header />

        <div className="payment-card">
            <div className="payment-nav">
                <ul className="mx-auto">
                    <li class="active"><a href="#">Payment</a></li>
                </ul>
            </div>
        

        <form className="payment-form">
            

            <div className="card-row">
                <p>Saved Cards:</p>
                <div className="card1">
                    <div>
                        <img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="" />
                    </div>

                    <div>
                        <input type="text" placeholder="**** **** **** 3193"/>
                    </div>
                    <div> 
                        <a href="#">Remove Card</a>
                    </div>
                </div>

                <div className="card-row2">

                    <div className="card2">
                        <img class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" alt="" />
                    </div>
                    <div className="card2"> 
                        <input type="text" placeholder="**** **** **** 4296"/> 
                    </div>
                    <div className="card2"> 
                        <a href="#">Remove card</a> 
                    </div>
                </div>

                <p>Add New Card:</p>

                <div className="card-head">

                    <div className="Addcard">
                        <div className="Addcard1">
                            <input type="text" placeholder="Card name" />
                        </div>
                    </div>

                    <div className="Addcard2">
                        <div>
                            <div>
                                <div className="card2Place">
                                    <input type="text" placeholder="Card number" />
                                </div>
                            </div>
                        </div>

                        <div className="card2Place">
                            <input type="text" placeholder="Exp. date"/>
                        </div>

                        <div className="card2Place">
                            <input type="text" placeholder="CVV" />
                        </div>

                    </div>
                </div>

            </div>
            <button>Add Card</button>
        </form>
        </div>
    </div>
    )};

export default Payment;