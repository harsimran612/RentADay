import React from "react";
import { Link } from "react-router-dom";
import DesktopNav from "../../components/desktop-nav/DesktopNav";
import MobileNav from "../../components/mobile-nav/MobileNav";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewlyListedPlaceLists() {
  const [newlyListed, setNewlyListed] = React.useState([]);

  React.useEffect(() => {
    const config = {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
      }
    };
    fetch("https://rent-a-day.herokuapp.com/api/listing/all", config)
      .then((res) => res.json())
      .then((data) => {
        setNewlyListed(data.listings);
      });
  }, []);

  return (
    <div className="main__page">
      <Header />
      <div className="rp__container--xl">
        <MobileNav link="/home" page="Newly Listed" />
        <DesktopNav
          page1="Listings"
          page1Link="/home"
          title="Newly Listed Place"
        />

        <div className="rp__container">
          <div className="RcmdPlace__items">
            {newlyListed.reverse().map((place) => (
              <NewlyListedPlaceCard
                key={place._id}
                placeId={place._id}
                placeTitle={place.title}
                src={place.siteImg}
                description={place.description}
                price={place.price}
              />
            ))}
          </div>
          <div className="RcmdPlace__map">
            <iframe
              title="map"
              className="gmap_iframe"
              width="100%"
              height="800px"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=1000&amp;height=500&amp;hl=en&amp;q=canada&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const NewlyListedPlaceCard = ({ placeId, placeTitle, src, description, price }) => {
  return (
    <Link to={`/newly-listed-place/${placeId}`} className="rp__item">
      <div className="rp__item__body">
        <div className="rp__item__body--title">
          <h5>{placeTitle}</h5>
          <i className="fa fa-heart-o"></i>
        </div>
        <h6>{placeTitle}</h6>
        <h6>Description</h6>
        <p>
          {description}
        </p>
        <span className="m-away">
          500 m away <i className="fa fa-map-marker"></i>
        </span>
        <span className="rp__rating">
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa fa-star-o"></i>
          </span>
          <span>(10 reviews)</span>
        </span>
        <span className="rp__dayPrice">
          <span>{price}</span>
          <span>/day</span>
        </span>
      </div>
      <div className="rp__item__preview">
        <img
          src={src}
          alt=""
          width="100%"
        />
      </div>
    </Link>
  );
};