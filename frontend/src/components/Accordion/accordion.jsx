import React from "react";
import "./accordion.css";

function Accordion({ children, title, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  const handleClick = () => {
    if (innerWidth < 700) {
      setIsOpen(!isOpen);
    }
  };

  React.useEffect(() => {
    if (innerWidth >= 700) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [innerWidth]);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={handleClick}>
        <div className="accordion__header__title">
          <span>{title}</span>
        </div>
        <span className="accordion__header__icon">
          {isOpen ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </span>
      </div>

      {isOpen && <hr />}

      {isOpen && <div className="accordion__content accShow">{children}</div>}
    </div>
  );
}

export default Accordion;
