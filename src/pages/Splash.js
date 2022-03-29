import React from 'react';
import logo1 from '../images/logo.jpeg';
import './Splash.css';
import { useNavigate } from "react-router-dom";
import splash1 from '../images/splash1.svg';
import splash2 from '../images/splash2.svg';
import splash3 from '../images/splash3.svg';
import splash4 from '../images/splash4.svg';

function Splash(){
        let navigate = useNavigate(); 
        const routeChange = () =>{ 
            let path = `../signin`; 
            navigate(path);
    }
  
    return(
        <div className='Splash'>
            <div className='splash-header'>
                <div className='header_icon'>
                    <img className="image-logo" src={logo1} alt=""/>
                </div>
                <div className='splash-signin'>
                  <button onClick={routeChange}>Sign In</button>
                </div>
            </div>
            <div className='splash-mainbody'>
                <div className='splash-intro'>
                    Begin your special one-day journey with <span class="rentaday">Rent A Day</span>
                </div>
                
                <div className='splash-intro1'>
                    Start your journey with easy space rental app for one day. It's specialized in a daytime event or impromptu meeting.
                </div>
                <div class="line"></div>
                <div className='splash-features'>
                    <div className='splash-features1'>
                        <img className="splashlogo" src={splash1} alt=""/>
                        The convience of finding and renting any place, purpose or space
                    </div>
                    <div className='splash-features2'>
                        <img className="splashlogo" src={splash2} alt=""/>
                        Reliable hosts and guests certified with Government IDs
                    </div>
                    <div className='splash-features3'>
                        <img className="splashlogo" src={splash3} alt=""/>
                        Extra space, simple and convenient registration for additional Income
                    </div>
                    <div className='splash-features4'>
                        <img className="splashlogo" src={splash4} alt=""/>
                        Trustability where personal protection comes first with thorough security
                    </div>
                </div>

                <div className='splash-click'>
                    <button onClick={routeChange}>Click to Start</button>
                </div>
            </div>
            

        </div>
    )
}

export default Splash;