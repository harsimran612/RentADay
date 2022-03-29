import React from 'react';
import './AboutUs.css';
import Nikhil from "../images/Nikhil deswal.png";
import Harsimran from "../images/Harsimran singh.png";
import Jeril from "../images/Jeril James.png";
import Josh from "../images/Joshline Mathew.png";
import Rahul from "../images/Rahul naranthatta.png";
import Himani from "../images/Himani gupta.png";
import Song from "../images/song.png";
import Header from '../components/Header';
import Footer from '../components/Footer';


function AboutUs(){
    return(
        <div className='main__page'>
            <Header />
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
                        <img src={Nikhil} alt=""/>
                        <h4>Nikhil Deswal</h4>
                        <p>Project Manager</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={Harsimran} alt=""/>
                        <h4>Harsimran Singh</h4>
                        <p>Backend Developer</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={Josh} alt=""/>
                        <h4>Joshline Mathew</h4>
                        <p>UI/UX Designer</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={Jeril} alt=""/>
                        <h4>Jeril James</h4>
                        <p>Backend Developer</p>
                    </div>


                    

                    <div className="aboutus-image1">
                        <img src={Song} alt=""/>
                        <h4>Songhui Park</h4>
                        <p>UI/UX Designer</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={Rahul} alt=""/>
                        <h4>Rahul Naranthatta</h4>
                        <p>Frontend Developer</p>
                    </div>

                    <div className="aboutus-image1">
                        <img src={Himani} alt=""/>
                        <h4>Himani Gupta</h4>
                        <p>Frontend Developer</p>
                    </div>

                    

                </div>

            </div>

        </div>
        <Footer />
        </div>
    );

}

export default AboutUs;



