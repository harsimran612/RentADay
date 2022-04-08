import React from 'react';
import './SearchPage.css'
import Card from '../components/Card';
import Banner from '../components/Banner'
import Header from '../components/Header';
import Footer from '../components/Footer';

function SearchPage(){
    return(
        <div className='main__page'>
            <Header />
        <div className='searchpage'>
            <h1>Search Results</h1>
            <Banner/>
            <div className='searchpage_card' >
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../newly-listed-place"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default SearchPage;