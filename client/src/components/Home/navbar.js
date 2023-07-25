import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  const history = useHistory();
  return (
    <nav className="flex bg-gradient-to-b from-[#0c0c0c]/70 to-transparent">
      <div className="flex justify-between p-3 grow flex-row items-center ">
        <a className=" text-[#F5F6FB] text-5xl font-extrabold pl-1" href="/">
          HomieSpace.
        </a>
        <div className=" gap-40 flex text-xl">
          <a href="/explore" className=" text-[#F5F6FB] font-semibold">
            Explore
          </a>
          <a href="/list" className="text-[#F5F6FB] font-semibold">
            List
          </a>
          <a href="#" className="text-[#F5F6FB] font-semibold">
            Reviews
          </a>
          <a href="#" className="text-[#F5F6FB] font-semibold">
            Contact
          </a>
        </div>
        <div className="flex text-xl text-[#F5F6FB] font-semibold gap-8 ">
          <a href="https://www.pokemoncenter.com/category/plush">
            Buy Me a Plushie
          </a>
          <button
            className=""
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
