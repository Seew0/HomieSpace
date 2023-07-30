import React from "react";
import Customer from "../../img/crocodile-img.jpg";
import Customer1 from "../../img/lady-img.jpg";
import Customer2 from "../../img/customer3.jpeg";
import Image from "mui-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="flex justify-center pt-24 flex-col items-center">
      {/* <p className=" text-7xl pb-24 font-bold">Few Reviews From Our Customers.</p> */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        showArrows={true}
        showIndicators={false}
        className=" w-[77vw] p-12"
      >
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl font-extrabold pb-6">
            <span className=" text-white">"</span>HomieSpace made my trip a
            breeze with its user-friendly interface and wide range of rental
            options, I found the perfect place for my journey.
            <span className=" text-white">"</span>
          </p>
          <br />
          <Image
            src={Customer}
            duration={0}
            className=" rounded-full"
            width={100}
          />
          <p className="text-lg font-light">Rohit from Delhi</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className=" text-4xl font-extrabold pb-6">
            <span className=" text-white">"</span>HomieSpace helped us find our
            wedding venue search was a joy. With their vast selection, finding
            our dream location for the big day was an absolute delight.
            <span className=" text-white">"</span>
          </p>
          <Image
            src={Customer1}
            duration={0}
            className=" rounded-full"
            width={100}
          />
          <p className="text-lg font-light">Raj & Preet from Chandigarh</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className=" text-4xl font-extrabold pb-6">
            <span className=" text-white">"</span>HomieSpace made my
            incredible India trip become an unforgettable experience! They
            expertly guided me to find the perfect place to stay, making it an
            enjoyable journey.<span className=" text-white">"</span>
          </p>
          <Image
            src={Customer2}
            duration={0}
            className="rounded-full"
            width={100}
          />
          <p className="text-lg font-light">Hailey from New York</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
