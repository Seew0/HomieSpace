import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const NavBar = () => {
  const history = useHistory();
  const { smoothScroll, scrollRef } = useSmoothScroll();
  return (
    <nav className="flex bg-gradient-to-b from-[#0c0c0c]/70 to-transparent">
      <div className="flex justify-between p-3 grow flex-row items-center ">
        <a className=" text-[#F5F6FB] text-5xl font-extrabold pl-1" href="/">
          HomieSpace.
        </a>
        <div className=" gap-40 flex text-xl">
          <a href="/explore " className=" text-[#F5F6FB] font-semibold">
            Explore
          </a>
          <a href="/list" className="text-[#F5F6FB] font-semibold">
            List
          </a>
          <a
            onClick={() => smoothScroll("#review")}
            className="text-[#F5F6FB] font-semibold cursor-pointer"
          >
            Reviews
          </a>
          <a
            onClick={() => smoothScroll("#contact")}
            className="text-[#F5F6FB] font-semibold cursor-pointer"
          >
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
