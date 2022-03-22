import React from 'react'
import Accordion from '../../components/Accordion/accordion';
import DesktopNav from '../../components/desktop-nav/DesktopNav';
import MobileNav from "../../components/mobile-nav/MobileNav";
import "./setting.css";

function Setting() {
    return (
        <div className="container--xl">
            <MobileNav page="Setting" />

            <div className="settings__container">
                <DesktopNav page1="Setting" page1Link="/settings" title="Privacy" />

                <div className="setting__content">
                    <Accordion title="Privacy">
                        <YourPrivacy />
                    </Accordion>

                    <Accordion title="Share your activity on social media">
                        <ShareYourActivity />
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Setting

const YourPrivacy = () => {
    return (
        <>
            <div className='accordion__content--text'>Minima nemo quas repudiandae non molestiae porro aut dolores rerum. Nostrum ipsam quos id illum molestiae esse repudiandae. Optio fugiat reiciendis minima eveniet et placeat et consequuntur. Numquam quibusdam dolorem. Iusto doloribus nobis laudantium aspernatur. Expedita et vel.</div>
            <div className='accordion__content--action'>
                <span>Edit</span>
            </div>
        </>
    )
}

const ShareYourActivity = () => {
    return (
        <>
            <div className='accordion__content--text'>Minima nemo quas repudiandae non molestiae porro aut dolores rerum. Nostrum ipsam quos id illum molestiae esse repudiandae. Optio fugiat reiciendis minima eveniet et placeat et consequuntur. Numquam quibusdam dolorem. Iusto doloribus nobis laudantium aspernatur. Expedita et vel.</div>
            <div className='accordion__content--action'>
                <input type='checkbox' />
            </div>
        </>
    )
}