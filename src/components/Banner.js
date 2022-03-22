import React from 'react'
import './Banner.css'
import {useNavigate} from "react-router-dom";

function Banner(){
    let navigate = useNavigate();
    return(
        <div className = 'banner'>
            <div className='banner_info'>
                <h1>Welcome!</h1>
            </div>

            <div className='banner_search'>
                <div className='location'>
                    <input type="text" name="location" placeholder='Location'></input>
                </div>

                <div className='price'>
                    <input type="number" name="price" placeholder='Price'></input>
                </div>

                <div className='guest'>
                    <input type="number" name="guest" placeholder='Guest'></input>
                </div>

                <div className='button'>
                    <button onClick={()=>{
                        navigate('../newly-listed-place');
                    }}>Search</button>
                </div>
            </div>
        </div>
    )
}
export default Banner
