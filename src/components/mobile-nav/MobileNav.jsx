import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

export default function MobileNav({ link, page }) {
  return (
    <div className="mobile__nav">
      <div className="mobile__nav--item">
        <Link to={link}>
          <i className="fa fa-arrow-left"></i>
        </Link>
        <span>{page}</span>
      </div>
      <div className="mobile__nav--item">
        <i className="fa fa-search"></i>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
}
