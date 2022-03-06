import React from 'react';
import './AboutUs.css';
import logo from "../images/Banner.jpeg";

function AboutUs(){
    return(
        <div className="aboutus">

            <div className='aboutus-picture'>

            </div>

            <div className='aboutus-info'>
                <h3>What is RentADay?</h3>
                <p>Short description why did we made this site.</p>
                <p>What is this idea for? aliquet orci, commodo volutpat maece nas nulla quisque. </p>
            </div>

            <div className='aboutus-team'>
                <h3>Who made this?</h3>
                <div className='aboutus-div'>
                    
                    <div className="aboutus-image1"> 
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>


                    <div className="aboutus-image1">
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>


                    <div className="aboutus-image1">
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={logo} alt=""/>
                        <h4>Name</h4>
                        <p>Project Manager</p>
                    </div>

                    <div className="aboutus-button">
                        <button>Click to Start</button>
                    </div>

                </div>

            </div>

        </div>
    );

}

export default AboutUs;



