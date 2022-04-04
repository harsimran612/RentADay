import React from 'react';
import './Payment.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Payment = props => {

    return (
    
    <div className="payment">
        {/* <Header /> */}

        <div>
            <div>
                <ul>
                    <li><a href="#">Payment</a></li>
                </ul>
            </div>
        </div>

        <form className="payment-form">
            <p>Saved Cards:</p>

            <div>
                <div>
                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="" />
                </div>
                <div>
                    <input type="text" placeholder="**** **** **** 3193"/>
                    <div className="card1"> 
                        <a href="#">Remove Card</a>
                    </div>
                </div>

                <p>Add New Card:</p>

                <div>

                    <div>
                        <div>
                            <input type="text" placeholder="Card name" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <div>
                                    <input type="text" placeholder="Card number" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <input type="text" placeholder="Exp. date"/>
                        </div>

                        <div>
                            <input type="text" placeholder="CVV" />
                        </div>

                    </div>
                </div>

            </div>
            <button>Add Card</button>
        </form>
    </div>
    )};

export default Payment;