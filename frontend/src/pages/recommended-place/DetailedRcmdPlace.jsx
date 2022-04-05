import React from "react";
import "../closest-place/DetailedClosestPlace.css";
import DesktopNav from "../../components/desktop-nav/DesktopNav";
import MobileNav from "../../components/mobile-nav/MobileNav";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DetailedRecommendedPlace() {
  return (
    <div className='main__page'>
            <Header />
    <div className="container--xl">
      <MobileNav link="/closest-place" page="Place Title" />
      <DesktopNav
        page1="Listings"
        page1Link="/home"
        page2="Recommended Place"
        page2Link="/recommended-place"
        title="Place Title"
      />

      {/* photo grid  */}
      <div className="Images__container">
          <img src="https://images.pexels.com/photos/5178055/pexels-photo-5178055.jpeg?cs=srgb&dl=pexels-curtis-adams-5178055.jpg&fm=jpg" alt="place" />
      </div>

      {/* place details */}
      <div className="PlaceDetails__container">
        <div className="PlaceDetails">
          <div className="PlaceDetails__body">
            <div className="PlaceDetails__header">
              <div className="PlaceDetails__header--image">
                <img src="https://picsum.photos/id/38/55/55" alt="" />
              </div>
              <div className="PlaceDetails__header--title">
                <h6>Cozy mansion surrounded in evergreens</h6>
                <h6>Hosted by Jessica O.</h6>
              </div>
            </div>

            <p>
              Repellendus commodi consectetur similique omnis reprehenderit aut
              modi. Ratione in nesciunt est modi. Sunt et deserunt. Ducimus
              voluptatem quia omnis harum aut aut. Omnis laudantium et odit.
              Eveniet reiciendis cum repudiandae ut ducimus quos adipisci.
              Eligendi eum quam excepturi aut corporis culpa aut rerum ex. Non
              dolores quae harum quidem.
            </p>

            <div className="PlaceDetails__table">
              <div className="PlaceDetails__table--row">
                <h5>Space details</h5>
                <p>
                  Bedrooms - 6, Barhrooms- 8, Property size (sq ft), 10000 sq ft
                </p>
              </div>
              <div className="PlaceDetails__table--row">
                <h5>Features</h5>
                <p>Features lists</p>
              </div>
              <div className="PlaceDetails__table--row">
                <h5>Amenities</h5>
                <p></p>
              </div>
              <div className="PlaceDetails__table--row">
                <h5>Parking</h5>
                <p></p>
              </div>
              <div className="PlaceDetails__table--row">
                <h5>Space rules</h5>
                <p></p>
              </div>
            </div>
          </div>

          <div className="PlaceDetails__filter">
            <BookingForm />
          </div>
        </div>

        <div className="PlaceDetails__map">
          <h4 className="PlaceDetails__map--title">Location</h4>
          <LocationMap />
        </div>
        <hr />
      </div>
    </div>
    <Footer />
        </div>
  );
}

const BookingForm = () => {
  return (
    <div className="PlaceDetails__bookingform">
      <div className="bookingRange">
        <div className="bookingPrice">
          <span>$500</span>
          <span>/hr</span>
        </div>
        <div className="bookingHours">4 hr. minimum</div>
      </div>
      <div className="bookingDate">
        <div className="bookingDate--input">
          <span>Date</span>
          <input type="date" name="date" />
        </div>
      </div>
      <div className="bookingTime">
        <div className="bookingTime--input">
          <span>Start Time</span>
          <input type="time" name="time" />
        </div>
        <div className="bookingTime--input">
          <span>End Time</span>
          <input type="time" name="time" />
        </div>
      </div>

      <div className="bookingButton">
        <button className="btn btn-primary btn-sm">Book Now</button>
      </div>

      <div className="bookingDetails">
        <span>
          Cancle for free within 24 hours{" "}
          <i className="fas fa-question-circle"></i>
        </span>
      </div>
    </div>
  );
};

const LocationMap = () => {
  return (
    <div className="mapouter">
      <iframe
        title="map"
        className="gmap_iframe"
        width="100%"
        height="500px"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=1000&amp;height=500&amp;hl=en&amp;q=canada&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};
