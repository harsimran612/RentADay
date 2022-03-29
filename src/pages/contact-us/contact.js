import emialjs from 'emailjs-com';

import React from 'react'
import MobileNav from '../../components/mobile-nav/MobileNav'
import './contact.css'
import Logo from "../../images/contact-page-logo.png"
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

        emialjs.sendForm('service_kep2asi','template_60o7e5a',e.target,'21cVZLJ1W_ZNlCZHR')
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='main__page'>
            <Header />
        <div className="container--xl">
            <MobileNav page="Contact Us" />

            <div className="contactUs__container">
                <div className="contactUs__desc">
                    <div className="contactUs__logo">
                        <img src={Logo} alt="logo" width="100%" height="100%" />
                    </div>
                    <span className='contactUs__desc--heading'>
                        We'd always love to hear from you.
                    </span>
                    <hr />
                    <span className='contactUs__desc--text'>
                        If you have any questions, comments, or concerns, please don't hesitate to contact us. We're always happy to help. We look forward to hearing from you.
                    </span>
                </div>
                <div className="contactUs__box">
                    <form className='contactUs__form' onSubmit={sendEmail}>
                        <label htmlFor='name' className="contactUs__form--label">
                            Name
                        </label>
                        <input className="contactUs__form--input" type="text" name="name"/>
                        <label htmlFor='email' className="contactUs__form--label">
                            Email
                        </label>
                        <input className="contactUs__form--input" type="email" name="email" />
                        <label htmlFor='subject' className="contactUs__form--label">
                            Subject
                        </label>
                        <input className="contactUs__form--input" type="text" name="subject"/>
                        <label htmlFor='message' className="contactUs__form--label">
                            Message
                        </label>
                        <textarea className="contactUs__form--textarea" type="text" rows='5' id="message"/>
                        {/* <span className='contactUs__form--checkbox'>
                            <input type='checkbox' />
                            <span>Keep update with notifications</span>
                        </span> */}
                        <button type='submit' className="contactUs__form--button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default ContactUs