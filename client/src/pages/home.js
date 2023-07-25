import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/Home/navbar";
import Strip from "../components/common/strip";
import Card from "../components/Home/card";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="overflow-scroll">
        <div className="bg-[url('../img/background.jpg')] h-full bg-no-repeat">
          <Strip />
          <NavBar />
          <main className="flex flex-col justify-center items-center h-[105vh]">
            <p className="text-[#B99A7A] text-6xl font-black">
              Find The Perfect Place For You to
            </p>
            <p className="text-[#F5F6FB] text-6xl font-black pb-5">
              <Typewriter
                options={{
                  strings: ["Live.", "Laugh.", "Party.", "Enjoy.", "Make Memories."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <Card />
          </main>
          <Strip />
        </div>
      </div>
    </>
  );
};

export default Home;
