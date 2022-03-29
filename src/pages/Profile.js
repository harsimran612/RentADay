import React from 'react';
import './Profile.css';
import images from '../images/Banner.jpeg';
import steve from '../images/Steve.jpeg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from "../context/userContext"

function Profile(){
    const {user} = useAuth();
    return(
        <div className='main__page'>
            <Header />
        <div className='profile'>
            <h2>Profile</h2>
            <div className='profile_1'>
                <div className='profile_image'>
                    <img src={steve} alt=''></img>
                </div>
                <div className='profile_info'>
                {/* --- To Do: Update User Profile as per signup name--- */}
                    <div className='profile_name'>
                        {user?.name}
                    </div>
                {/* --- To Do: Update User Profile --- */}
                    <div className='profile_location'>
                        <p>Vancouver, British Columbia</p>
                    </div>
                    <div className='profile_description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
                    </div>
                    <div className='profile_favorites'>
                        <h4>Favourites</h4>
                        <div className='image'>
                            <img src={images} alt=''></img>
                            <img src={images} alt=''></img>
                            <img src={images} alt=''></img>
                            <img src={images} alt=''></img>
                        </div>
                        <a href='./Favourites'> See More</a>
                    </div>

        
                </div>
            </div>
        
        </div>
        <Footer />
        </div>
    )
}

export default Profile