import React from 'react';
import './Header.css';
import logo1 from '../images/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavDropdown} from'react-bootstrap';
//import Userphoto from '../images/Steve.jpeg';
import { useAuth } from "../context/userContext"
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/utilsContext";


function Header(){
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const { handlerSnackbar } = useUtils();
    
    const logOutHandler = () => {
        localStorage.removeItem('rent-a-day-user');
        setUser(null);
        navigate('/');
        handlerSnackbar({ message: "Logout successfull!", type: "success", duration: 2000 });
    }

    return(
        <div className='header'>
            <div className='header_icon'>
                <img className="image-logo" src={logo1} alt=""/>
            </div>

            <div className='header_center'>
                <div className="header_nav">
                    <div className="Home_Listing_Nav">
                        <a href="/home" >Listings</a>
                    </div>
                    
                    {user && <div className="Home_Setting_Nav">
                        <a href="/settings" >Settings</a>
                    </div>}

                    <div className="Home_Setting_Nav">
                        <a href="/contact-us" >Contact Us</a>
                    </div>
                </div>
                
                {user ? 
                    <div className="profile-button">
                        {user.img && <img src={user.img} alt=""></img>}
                        <NavDropdown title={user.name} id="basic-nav-dropdown">
                            <NavDropdown.Item href={"../AddListing"}>Add New Listing</NavDropdown.Item>
                            <NavDropdown.Item href={"../profile"}>Profile</NavDropdown.Item>
                            <NavDropdown.Item href={"../payment"}>Payment</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Newsletter</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" onClick={logOutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div> : 
                    <>
                        <div className='home_auth_nav'>
                            <a href="/sign-in" >Sign In</a>{" "}/{" "}
                            <a href="/sign-up" >Sign Up</a>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}


export default Header