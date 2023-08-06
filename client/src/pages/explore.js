import React from "react";
import { Helmet } from "react-helmet";
import ExpNav from "../components/explore/nav";
import Strip from "../components/common/strip";
import MainSection from "../components/explore/explore";

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore</title>
      </Helmet>
      <div>
        <Strip />
        <ExpNav />
        <MainSection/>
      </div>
    </>
  );
};

export default Explore;
