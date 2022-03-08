import React from "react";
import "./DesktopNav.css";
import { Link } from "react-router-dom";

export default function DesktopNav({
  page1,
  page2,
  page1Link,
  page2Link,
  title,
}) {
  return (
    <div className="desktop__nav">
      <Link to={page1Link} className="heading">
        <sapn>{page1}</sapn>
      </Link>
      <i className="fas fa-angle-right"></i>
      {page2 && (
        <>
          <Link to={page2Link}>
            <sapn>{page2}</sapn>
          </Link>
          <i className="fas fa-angle-right"></i>
        </>
      )}

      <span className="desktop__nav--page">{title}</span>
    </div>
  );
}
