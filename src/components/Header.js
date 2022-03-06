import React from 'react';
import './Header.css';
import logo1 from '../images/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown} from'react-bootstrap';


function Header(){
    return(
        <div className='header'>
            <div className='header_icon'>
                <img className="image-logo" src={logo1} alt=""/>
            </div>

            <div className='header_center'>
                <div className="Home_Listing_Nav">
                    <a href="./home" >Listings</a>
                </div>

                <div className="Home_Search_Nav">
                    <a href="./home" >Notification</a>
                </div>
                    
                <div className="Home_Setting_Nav">
                    <a href="./home" >Settings</a>
                </div>

                <div className="Home_Search_Nav">
                    <a href="./home" >Reviews</a>
                </div>
                <div className="profile-button">
                    <NavDropdown title="Username" id="basic-nav-dropdown">
                        <NavDropdown.Item href={"../pages/profile"}>Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Payment</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </div>
    )
}


export default Header