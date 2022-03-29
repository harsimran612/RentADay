import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            

            <h3>Recommended Places</h3>
            <div className='home__section'>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
            </div>
            <a href="/recommended-place">View All</a>

            <h3>Newly Listed Places</h3>
            <div className='home__section'>
                {newlyListed.map(listing => (
                    <a key={listing._id} href={`/newly-listed-place/${listing._id}`}><Card src={listing.siteImg} title={listing.title} description={listing.description} price={`${listing.price} / Day`}/></a>
                ))}
            </div>
            <a href="/newly-listed-place">View All</a>
        </div>
        <Footer />
        </div>
    )
}

export default Home