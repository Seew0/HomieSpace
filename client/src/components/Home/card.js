import "../../css/card.css";
import React from "react";
import House from "../../img/house.webp";

const Card = () => {
  return (
    <>
      <div className="card">
        <a>
          <img src={House}/>
          <span>Whispering Pines Cottages</span>
        </a>
        <a>
          <span>HOVER ME</span>
        </a>
        <a>
          <span>HOVER ME</span>
        </a>
      </div>
    </>
  );
};

export default Card;
