import React from 'react';
import './AddListing.css';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUtils } from '../context/utilsContext';
import { useNavigate } from "react-router-dom";

function AddListing() {
    const { handleBackdrop, handlerSnackbar } = useUtils();
    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [condition, setCondition] = useState('');


    const addNewListing = (e) => {
        e.preventDefault();

        handleBackdrop(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('phoneNumber', phoneNumber);
        formData.append('address', address);
        formData.append('date', date);
        formData.append('time', time);
        formData.append('condition', condition);
        formData.append('email', JSON.parse(localStorage.getItem('rent-a-day-user')).email);
        formData.append('siteImg', images[0]);

        const config = {
            method: 'POST',
            headers: {
                'Accept': '/',
            },
            body: formData
        };

        fetch('https://rent-a-day.herokuapp.com/api/listing/new', config).then(res => res.json()).then(data => {
            if (data.success) {
                handleBackdrop(false);
                handlerSnackbar({ message: data.message, type: "success", duration: 2000 });
                navigate("/home");
            }
            else {
                handleBackdrop(false);
                handlerSnackbar({ message: data.message, type: "error", duration: 5000 });
            }
        }).catch(err => {
            handleBackdrop(false);
            console.log(err)
            handlerSnackbar({ message: "Something went wrong!", type: "error", duration: 5000 });
        });
    }


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
                    {imageURLs.map((imageSrc, i) => <img key={i} src={imageSrc} alt=""/>)}
                </div>
                <div className='addlisting_button'>
                    <input type="file" className='choose' multiple accept="image/*" onChange={onImageChange} />
                </div>
            </div>

            <div className='addlisting_form'>
                <form onSubmit={addNewListing}>
                    <label>
                        Title
                        <input type="text" id="title" name="title" placeholder="Create a title for your property" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </label>
                    <label>
                        Category
                        <input type="text" id="category" name="category" placeholder="Select a Category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                    </label>
                    <label>
                        Condition
                        <input type="text" id="condition" name="condition" placeholder="Select a condition" value={condition} onChange={(e) => setCondition(e.target.value)}></input>
                    </label>
                    <label>
                        Description
                        <input type="textarea" id="description" name="description" placeholder="Describe the property information you want to share." value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </label>
                    <label>
                        Address
                        <input type="text" id="address" name="address" placeholder="Where is the location" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    </label>
                    <label>
                        Phone Number
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </label>
                    <label>
                        Time
                        <input type="time" id="time" name="time" placeholder="time" onChange={(e) => setTime(e.target.value)}></input>
                    </label>
                    <label>
                        Date
                        <input type="date" id="date" name="date" placeholder="date" onChange={(e) => setDate(e.target.value)}></input>
                    </label>
                    <label>
                        Price
                        <input type="number" id="price" name="price" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
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