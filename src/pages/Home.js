import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home(){
    
    return(
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
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
            </div>
            <a href="/newly-listed-place">View All</a>
        </div>
    )
}

export default Home