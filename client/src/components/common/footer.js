import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <footer class="bg-[#CCA27C] text-white" id="contact">
        <div class="container mx-auto px-4 py-6 grid grid-cols-3 gap-4">
          <div class="text-center">
            <h4 class="text-lg font-bold">About Us</h4>
            <p>We are a house rental platform</p>
          </div>

          <div class="text-center">
            <h4 class="text-lg font-bold">Contact</h4>
            <a href="mailto:miglanidevansh83@gmail.com">
              Email: miglanidevansh83@gmail.com
            </a>
            <p>Phone: +91 9315612289</p>
          </div>

          {/* <!-- Footer Column 3 --> */}
          <div class="text-center">
            <h4 class="text-lg font-bold">Follow Us</h4>
            <div class="flex justify-center space-x-4">
              {/* <!-- GitHub Logo --> */}
            <a href="https://www.github.com/seew0" class="text-white hover:text-gray-400">
              <GitHubIcon />
            </a>
            {/* <!-- Instagram Logo --> */}
            <a href="https://www.instagram.com" class="text-white hover:text-gray-400">
              <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
