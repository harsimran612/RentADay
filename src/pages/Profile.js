import React from 'react';
import './Profile.css';
import images from '../images/Banner.jpeg';
import steve from '../images/Steve.jpeg';

function Profile(){
    return(
        <div className='profile'>
            <h2>Profile</h2>
            <div className='profile_1'>
                <div className='profile_image'>
                    <img src={steve} alt=''></img>
                </div>
                <div className='profile_info'>
                    <div className='profile_name'>
                        Ryan Davis
                    </div>
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

    )
}

export default Profile