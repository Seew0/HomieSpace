import { Paper, IconButton ,InputBase} from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>Home</Helmet>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white p-4 shadow">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Your Logo
            </a>
            <ul className="space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Place your content here */}
          </div>
        </main>
        <footer className="bg-gray-200 p-4 mt-8">
          <p className="text-center text-gray-600">
            © 2023 Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
