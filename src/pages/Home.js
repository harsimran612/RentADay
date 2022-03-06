import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home(){
    return(
        <div className='home'>
            
            <Banner />

            <h3>Closest Places</h3>
            
            <div className='home__section'>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                
            </div>
            <a href="/home">View All</a>
            

            <h3>Recommended Places</h3>
            <div className='home__section'>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
            </div>
            <a href="/home">View All</a>

            <h3>Newly Listed Places</h3>
            <div className='home__section'>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/>
            </div>
    
        </div>
    )
}

export default Home