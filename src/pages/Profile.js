import React from 'react';
import './Profile.css';
import images from '../images/Banner.jpeg';
import { useParams } from 'react-router-dom';

function Profile(){
    let {username} = useParams();
    return(
        <div className='profile'>
            <h2>Profile</h2>
            <div className='profile_1'>
                <div className='profile_image'>
                    <img src={images} alt=''></img>
                </div>
                <div className='profile_info'>
                    <div className='profile_name'>
                        {username}
                    </div>
                    <div className='profile_location'>
                        <p>Location</p>
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

                    <div className='profile_reviews'>
                        <h4>Reviews</h4>
                        <div className='reviews'>
                            <img src={images} alt=''></img>
                            <p>Item title - Date</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        </div>
                        <div className='reviews'>
                            <img src={images} alt=''></img>
                            <p>Item title - Date</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        </div>
                        <a href='./Reviews'> See More</a>
                    </div>
                </div>
            </div>
            <div className='profile_2'>
                <div className='verification'>
                     <a href='/home'>Verification</a>
                </div>
                <div className='Favourites'>
                     <a href='/home'>Favourites</a>
                </div>
                <div className='Review'>
                     <a href='/home'>Review</a>
                </div>
                <div className='Settings'>
                     <a href='/home'>Settings</a>
                </div>
            
            </div>
            
           
            <div className='logout'>
                <a href='/home'>Logout</a>
            </div>
        </div>

    )
}

export default Profile