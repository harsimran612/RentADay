import React from "react";
import { Link } from "react-router-dom";
import DesktopNav from "../../components/desktop-nav/DesktopNav";
import MobileNav from "../../components/mobile-nav/MobileNav";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewlyListedPlaceLists() {
  return (
    <div className='main__page'>
            <Header />
    <div className="rp__container--xl">
      <MobileNav link="/home" page="Recommended Place" />
      <DesktopNav
        page1="Listings"
        page1Link="/home"
        title="Newly Listed Place"
      />

      <div className="rp__container">
        <div className="RcmdPlace__items">
          <NewlyListedPlaceCard
            placeId={56283654235}
            placeTitle="Item Title 1"
            distance={500}
          />
          <NewlyListedPlaceCard
            placeId={56283654235}
            placeTitle="Item Title 2"
            distance={200}
          />
          <NewlyListedPlaceCard
            placeId={56283654235}
            placeTitle="Item Title 3"
            distance={400}
          />
        </div>
        <div className="RcmdPlace__map">
          <iframe
            title="map"
            class="gmap_iframe"
            width="100%"
            height="800px"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=1000&amp;height=500&amp;hl=en&amp;q=canada&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />
        </div>
  );
}

const NewlyListedPlaceCard = ({ placeId, placeTitle, distance }) => {
  return (
    <Link to={`/newly-listed-place/${placeId}`} className="rp__item">
      <div className="rp__item__body">
        <div className="rp__item__body--title">
          <h5>{placeTitle}</h5>
          <i className="fa fa-heart-o"></i>
        </div>
        <h6>Item Category - item condition</h6>
        <h6>Description</h6>
        <p>
          Ipsam dolore qui. Impedit quia deleniti quia ducimus itaque. A eius
          illo minus amet fuga. Quos qui occaecati voluptates. Ipsam dolore qui.
          Impedit quia deleniti quia ducimus itaque. A eius illo minus amet
          fuga. Quos qui occaecati voluptates. Ipsam dolore qui. Impedit quia
          deleniti quia ducimus itaque. A eius illo minus amet fuga. Quos qui
          occaecati voluptates. Ipsam dolore qui. Impedit quia deleniti quia
          ducimus itaque. A eius illo minus amet fuga. Quos qui occaecati
          voluptates. Ipsam dolore qui. Impedit quia deleniti quia ducimus
          itaque. A eius illo minus amet fuga. Quos qui occaecati voluptates.
          Ipsam dolore qui. Impedit quia deleniti quia ducimus itaque. A eius
          illo minus amet fuga. Quos qui occaecati voluptates.
        </p>
        <span className="m-away">
          {distance} m away <i className="fa fa-map-marker"></i>
        </span>
        <span className="rp__rating">
          <span>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fa fa-star-o"></i>
          </span>
          <span>(10 reviews)</span>
        </span>
        <span className="rp__dayPrice">
          <span>$150 CAD</span>
          <span>/day</span>
        </span>
      </div>
      <div className="rp__item__preview">
        <img
          src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?cs=srgb&dl=pexels-curtis-adams-3935333.jpg&fm=jpg"
          alt=""
          width="100%"
        />
      </div>
    </Link>
  );
};
