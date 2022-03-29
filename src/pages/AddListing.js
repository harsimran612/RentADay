import React from 'react';
import './AddListing.css';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AddListing(){
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect (()=>{
        if(images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    },[images]);
    
    function onImageChange(e){
        setImages([...e.target.files]);
    }

    return(
        <div className='main__page'>
            <Header />
        <div className='addlisting'>
            <h2>Add Listing Property</h2>
            <div className='addlisting_img'>
                <div className='addlisting_addimages'>
                    {imageURLs.map(imageSrc => <img src={imageSrc} alt=""/>)}
                </div>
                <div className='addlisting_button'>
                    <input type="file" className='choose' multiple accept="image/*" onChange={onImageChange} />
                </div>
            </div>

            <div className='addlisting_form'>
                <form action='POST' encType=''>
                    <label>
                        Title
                        <input type="text" id="title" name="title" placeholder="Create a title for your property"></input>
                    </label>
                    <label>
                        Category
                        <input type="text" id="category" name="category" placeholder="Select a Category"></input>
                    </label>
                    <label>
                        Condition
                        <input type="text" id="condition" name="condition" placeholder="Select a condition"></input>
                    </label>
                    <label>
                        Description
                        <input type="textarea" id="description" name="description" placeholder="Describe the property information you want to share."></input>
                    </label>
                    <label>
                        Address
                        <input type="text" id="address" name="address" placeholder="Where is the location"></input>
                    </label>
                    <label>
                        Time
                        <input type="time" id="time" name="time" placeholder="time"></input>
                    </label>
                    <label>
                        Date
                        <input type="date" id="date" name="date" placeholder="date"></input>
                    </label>
                    <label>
                        Price
                        <input type="number" id="price" name="price" placeholder="price"></input>
                    </label>

                    <input type="submit" value="Save"></input>

                </form>
            </div>

            <div className='addlisting_button'>
            </div>
        </div>
        <Footer />
        </div>
    );
}
export default AddListing