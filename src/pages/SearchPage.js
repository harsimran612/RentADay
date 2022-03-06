import React from 'react';
import './SearchPage.css'
import Card from '../components/Card';
import Banner from '../components/Banner'

function SearchPage(){
    return(
        <div className='searchpage'>
            <h1>Search Results</h1>
            <Banner/>
            <div className='searchpage_card' >
                <a href="../pages/aboutus"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../pages/aboutus"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../pages/aboutus"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                <a href="../pages/aboutus"><Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Artistic studio sunlit production" description="Sed vel turpis adispcing penatibus orcineque. Erat sed fermentum ipsum vel" price="$400 / Day"/></a>
                
            </div>
                
        </div>
    )
}

export default SearchPage;