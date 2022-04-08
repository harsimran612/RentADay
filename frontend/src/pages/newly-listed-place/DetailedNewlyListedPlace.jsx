import React from "react";
import DesktopNav from "../../components/desktop-nav/DesktopNav";
import MobileNav from "../../components/mobile-nav/MobileNav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useUtils } from "../../context/utilsContext";

export default function DetailedNewlyListedPlace() {
  let { placeId } = useParams();

  // ------------
  const [place, setPlace] = React.useState([]);
  React.useEffect(() => {
    fetch("https://rent-a-day.herokuapp.com/api/listing/all")
      .then((res) => res.json())
      .then((data) => {
        const place = data.listings.filter((place) => place._id === placeId)[0];
        setPlace(place);
      });
  }, [placeId]);
  //-----------------

  return (
    <div className="main__page">
      <Header />
      <div className="container--xl">
        <MobileNav link="/home" page="Place Title" />
        <DesktopNav
          page1="Listings"
          page1Link="/home"
          page2="Newly Listed Place"
          page2Link="/newly-listed-place"
          title="Place Title"
        />

        {/* photo grid  */}
        <div className="Images__container">
          <img src={place?.siteImg} alt="place" />
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
                  <h6>{place?.title}</h6>
                  <h6>Hosted by Jessica O.</h6>
                </div>
              </div>

              <p className="PlaceDetails__desc">{place?.description}</p>

              <div className="PlaceDetails__table">
                <div className="PlaceDetails__table--row">
                  <h5>Space details</h5>
                  <p>
                    Bedrooms - 6, Barhrooms- 8, Property size (sq ft), 10000 sq
                    ft
                  </p>
                </div>
                <div className="PlaceDetails__table--row">
                  <h5>Category</h5>
                  <p>{place?.category}</p>
                </div>
                <div className="PlaceDetails__table--row">
                  <h5>Address</h5>
                  <p>{place?.address}</p>
                </div>
                <div className="PlaceDetails__table--row">
                  <h5>Condition</h5>
                  <p>{place?.condition}</p>
                </div>
                <div className="PlaceDetails__table--row">
                  <h5>Parking</h5>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="PlaceDetails__filter">
              <BookingForm price={place?.price} />
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

const BookingForm = ({ price }) => {
  const [date, setDate] = React.useState();
  const [startTime, setStartTime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  const { handlerSnackbar } = useUtils();

  const handleBook = () => {
    if (date && startTime && endTime) {
      handlerSnackbar({
        message: "Booking Successful",
        type: "success",
        duration: 2000,
      });
    } else {
      handlerSnackbar({
        message: "Please fill all the fields",
        type: "error",
        duration: 3000,
      });
    }
  };

  return (
    <div className="PlaceDetails__bookingform">
      <div className="bookingRange">
        <div className="bookingPrice">
          <span>${price}</span>
          <span>/hr</span>
        </div>
        <div className="bookingHours">4 hr. minimum</div>
      </div>
      <div className="bookingDate">
        <div className="bookingDate--input">
          <span>Date</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="bookingTime">
        <div className="bookingTime--input">
          <span>Start Time</span>
          <input
            type="time"
            name="time"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="bookingTime--input">
          <span>End Time</span>
          <input
            type="time"
            name="time"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>

      <div className="bookingButton">
        <button className="btn btn-primary btn-sm" onClick={handleBook}>
          Book Now
        </button>
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