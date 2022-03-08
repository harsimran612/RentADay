import React from "react";
import "./ClosestPlaceLists.css";
import DesktopNav from "../../components/desktop-nav/DesktopNav";
import MobileNav from "../../components/mobile-nav/MobileNav";
import { Link } from "react-router-dom";

export default function ClosestPlaceLists() {
  return (
    <div className="container--lg">
      <MobileNav link="/pages/home" page="Closest Place" />
      <DesktopNav
        page1="Listings"
        page1Link="/pages/home"
        title="Closest Place"
      />

      <div className="ClosestPlace__items">
        <ClosestPlaceCard
          placeId={56283654235}
          placeTitle="Item Title 1"
          distance={500}
        />
        <ClosestPlaceCard
          placeId={56283654235}
          placeTitle="Item Title 2"
          distance={200}
        />
        <ClosestPlaceCard
          placeId={56283654235}
          placeTitle="Item Title 3"
          distance={400}
        />
      </div>
    </div>
  );
}

const ClosestPlaceCard = ({ placeId, placeTitle, distance }) => {
  return (
    <Link to={`/closest-place/${placeId}`} className="cp__item">
      <div className="cp__item__body">
        <div className="cp__item__body--title">
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
      </div>
      <div className="cp__item__preview">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg"
          alt=""
          width="100%"
        />
      </div>
    </Link>
  );
};
