import React from 'react';
import './ExpandedCard.css'
import image from '../images/Banner.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from'react-bootstrap';

function ExpandedCard(){
    return(
        <div className='expandedcard'>
            <div className='expandedcard_image'>
            <Carousel>
                <Carousel.Item>
                    <img src={image} alt='' width='100%' height='auto'></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image} alt='' width='100%' height='auto'></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image} alt='' width='100%' height='auto'></img>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className='expandedcard_info'>
                <h3>Artistic studio sunlit production</h3>
                <p>Description</p>
                <p>Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve, Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve, Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve ,Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve ,Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve</p>
                <p>Rules</p>
                <p>Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve, Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum ve</p>
            </div>
            <button>
                Book this place
            </button>
        </div>
    )
}

export default ExpandedCard;