import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/Home/navbar";
import Strip from "../components/common/strip";
import Card from "../components/Home/card";
import Typewriter from "typewriter-effect";
import ReviewSection from "../components/Home/review";
import Footer from "../components/common/footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="overflow-scroll">
        <div className="bg-[url('../img/background.jpg')] h-auto bg-no-repeat">
          <div className="bg-black/70 h-full">
            <Strip />
            <NavBar />
            <main className="flex flex-col justify-center items-center h-[105vh]">
              <p className="text-[#F5F6FB] text-6xl font-black">
                Find The Perfect Place For You to
              </p>
              <p className="text-[#F5F6FB] text-6xl font-black pb-5">
                <Typewriter
                  options={{
                    strings: [
                      "Live.",
                      "Laugh.",
                      "Party.",
                      "Enjoy.",
                      "Make Memories.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <Card />
            </main>
            <ReviewSection />
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
