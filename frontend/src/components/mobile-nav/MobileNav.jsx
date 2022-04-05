import React from "react";
import "./MobileNav.css";
import { Link, useNavigate } from "react-router-dom";

export default function MobileNav({ link, page }) {
  let goBack = useNavigate();

  return (
    <div className="mobile__nav">
      <div className="mobile__nav--item">
        {link ? (
          <Link to={link}>
            <i className="fa fa-arrow-left"></i>
          </Link>
        ) : (
          <i className="fa fa-arrow-left" onClick={() => goBack(-1)}></i>
        )}

        <span>{page}</span>
      </div>
      <div className="mobile__nav--item">
        <i className="fa fa-search"></i>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
}
