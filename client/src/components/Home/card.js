import "../../css/card.css";
import React from "react";
import House1 from "../../img/house.webp";
import House2 from "../../img/house1.webp";
import House3 from "../../img/house2.webp";
import Image from "mui-image";

const Card = () => {
  return (
    <>
      <div className="card">
        <a>
          <Image src={House1} duration={0} />
          <span>
            <span className="font-bold">Whispering Pines Cottages</span>
            <br />
            <span className="font-extralight text-xs text-gray-500">
              Shimla,India
            </span>
            <br />
            <p>
              <span className="font-bold text-xl">
                1,200 - 1,800 ₹
                <span className="font-extralight text-xs text-gray-500">
                  /per night
                </span>
              </span>
            </p>
          </span>
        </a>
        <a>
          <Image src={House2} duration={0} />
          <span>
            <span className="font-bold">Memories Villa</span>
            <br />
            <span className="font-extralight text-xs text-gray-500">
              Chattarpur,Delhi
            </span>
            <br />
            <p>
              <span className="font-bold text-xl">
                3,200 - 3,900 ₹
                <span className="font-extralight text-xs text-gray-500">
                  /per night
                </span>
              </span>
            </p>
          </span>
        </a>
        <a>
          <Image src={House3} duration={0} />
          <span>
            <span className="font-bold">sundarprem Villa</span>
            <br />
            <span className="font-extralight text-xs text-gray-500">
              Noida,Uttar Pradesh
            </span>
            <br />
            <p>
              <span className="font-bold text-xl">
                2,500 - 3,000 ₹
                <span className="font-extralight text-xs text-gray-500">
                  /per night
                </span>
              </span>
            </p>
          </span>
        </a>
      </div>
    </>
  );
};

export default Card;
