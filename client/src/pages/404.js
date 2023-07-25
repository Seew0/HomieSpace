import React from "react";
import { Helmet } from "react-helmet";

const error404 = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="h-screen bg-no-repeat bg-[url(https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg)]">
        <div className="bg-black/40 h-screen w-screen flex items-center justify-center">
          <div className="text-white text-8xl font-black glitchy-text">
            404 Page Not Found
          </div>
        </div>
      </div>
    </>
  );
};

export default error404;
