import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import home1 from '../images/img1.jpeg';
import home2 from '../images/img2.jpeg';
import home3 from '../images/img3.jpeg';
import home4 from '../images/img4.jpeg';

function Home(){
    const [newlyListed, setNewlyListed] = React.useState([]);
    
    React.useEffect(() => {
        fetch("http://localhost:8080/api/listing/all").then(res => res.json()).then(data => {
            setNewlyListed(data.listings.reverse());
        });
    }, []);

    return(
        <div className='main__page'>
            <Header />
        <div className='home'>
            
            <Banner />
            
            <div className='home__section'>
                
            </div>
            
            <h3>Newly Listed Places</h3>
            <div className='home__section'>
                {newlyListed.map(listing => (
                    <a key={listing._id} href={`/newly-listed-place/${listing._id}`}><Card src={listing.siteImg} title={listing.title} description={listing.description} price={`${listing.price} / Day`}/></a>
                ))}
            </div>

            <h3>Recommended Places</h3>
            <div className='home__section'>
                <a href="/recommended-place/56283654235"><Card src={home1} title="New Private Space With Kitchen And Patio" description="Centrally located just off Cambie Street in Mt. Pleasant, our brand new multi-purpose, self-contained space offers a modern design with full kitchen, lounge area and patio. Make this space your own with flexible tables and seating, a large island to saddle up to, and everything you need for professional presentations, training and workshops." price="400 / Day"/></a>

                <a href="/recommended-place/56283654235"><Card src={home2} title="Heritage Loft Photography Studio" description="True New York style loft in the heart of Gastown. 1906 brick and concrete construction completely restored in 2006. This grand open concept includes 14’ high ceilings, concrete floors, visible piping and minimal modern walls.A true example of a heritage conversion building in Vancouver. Huge deck overlooking Vancouver’s cityscape as well as a smaller rooftop deck with panoramic city, water and mountain views." price="350 / Day"/></a>

                <a href="/recommended-place/56283654235"><Card src={home3}title="Bright Industrial Photo Studio" description="Our ground level studio in Strathcona is best used for photo and video production (if not requiring soundproofing) and ideal for portrait and commercial work" price="470 / Day"/></a>

                <a href="/recommended-place/56283654235"><Card src={home4}title="Eclectic Bright Western Boho Apartment" description="Welcome to Studio Sol in East Vancouver!This apartment has a western-boho 70's aesthetic, and is flooded with beautiful natural light through it's South/East facing windows. The vintage furnishings - such as an original 1800's red velvet sofa, a gorgeous 1960's record player, and plenty of eclectic artwork - is the creative's dream, and perfect for photo shoots." price="540 / Day"/></a>
            </div>

        </div>
        <Footer />
        </div>
    )
}

export default Home