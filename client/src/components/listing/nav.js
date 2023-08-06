import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
  const history = useHistory();

  function handleLogout(){
    localStorage.removeItem("ResponseToken");
    history.push("/login");
  }
  
  return (
    <>
      <nav className="flex bg-white/80">
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
            <a href="/home#review" className=" font-semibold cursor-pointer">
              Reviews
            </a>
            <a href="#contact" className=" font-semibold cursor-pointer">
              Contact
            </a>
          </div>
          <div className="flex text-xl  font-semibold gap-8 ">
            <a href="https://www.pokemoncenter.com/category/plush">
              Buy Me a Plushie
            </a>
            <a onClick={handleLogout} className=" cursor-pointer">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
