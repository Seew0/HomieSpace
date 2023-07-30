import React, { useState } from "react";

const Nav = () => {
  const [houseData, setHouseData] = useState({
    HouseTitle: "",
    Description: "",
    RentPerDay: 0,
    Location: "",
    Rooms: 0,
    Bathrooms: 0,
    MaxGuests: 0,
    Amenities: [],
    OwnerID: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to the backend API.
    console.log("Submitted data:", houseData);
  };
  return (
    <>
      
        <nav className="flex bg-[#F5F6FB]">
          <div className="flex justify-between p-3 grow flex-row items-center text-black ">
            <a className="  text-5xl font-extrabold pl-1" href="/">
              HomieSpace.
            </a>
            <div className=" gap-40 flex text-xl">
              <a href="/explore " className="  font-semibold">
                Explore
              </a>
              <a href="/dashboard" className=" font-semibold">
                Dashboard
              </a>
              <a
                href="/home#review"
                className=" font-semibold cursor-pointer"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className=" font-semibold cursor-pointer"
              >
                Contact
              </a>
            </div>
            <div className="flex text-xl  font-semibold gap-8 ">
              <a href="https://www.pokemoncenter.com/category/plush">
                Buy Me a Plushie
              </a>
            </div>
          </div>
        </nav>
        
    </>
  );
};

export default Nav;
