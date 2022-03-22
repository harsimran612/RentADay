import React from 'react'
import MobileNav from '../../components/mobile-nav/MobileNav'
import './contact.css'
import Logo from "../../images/contact-page-logo.png"

function ContactUs() {
    return (
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
                    <form className='contactUs__form'>
                        <label className="contactUs__form--label">
                            Name
                        </label>
                        <input className="contactUs__form--input" type="text" />
                        <label className="contactUs__form--label">
                            Email
                        </label>
                        <input className="contactUs__form--input" type="email" />
                        <label className="contactUs__form--label">
                            Subject
                        </label>
                        <input className="contactUs__form--input" type="text" />
                        <label className="contactUs__form--label">
                            Message
                        </label>
                        <textarea className="contactUs__form--textarea" type="text" rows='5' />
                        <span className='contactUs__form--checkbox'>
                            <input type='checkbox' />
                            <span>Keep update with notifications</span>
                        </span>
                        <button className="contactUs__form--button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs