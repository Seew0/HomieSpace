import EscalatorWarningRoundedIcon from "@mui/icons-material/EscalatorWarningRounded";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CarouselComponent from "../common/carousel";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const ReviewSection = () => {
  const { smoothScroll, scrollRef } = useSmoothScroll();
  return (
    <>
      <section
        id="review"
        ref={scrollRef}
        className=" flex flex-col justify-center items-center h-full"
        style={{
          background: "hsla(30, 53%, 87%, 1)",
          backgroundImage:
            "linear-gradient(180deg, hsla(30, 53%, 87%, 1) 0%, hsla(31, 52%, 86%, 1) 42%, hsla(30, 51%, 83%, 1) 69%, hsla(31, 52%, 81%, 1) 100%, hsla(31, 52%, 87%, 1) 100%, hsla(32, 51%, 86%, 1) 100%, hsla(31, 52%, 87%, 1) 100%)",
          background:
            "-moz-linear-gradient(180deg, hsla(30, 53%, 87%, 1) 0%, hsla(31, 52%, 86%, 1) 42%, hsla(30, 51%, 83%, 1) 69%, hsla(31, 52%, 81%, 1) 100%, hsla(31, 52%, 87%, 1) 100%, hsla(32, 51%, 86%, 1) 100%, hsla(31, 52%, 87%, 1) 100%)",
          background:
            "-webkit-linear-gradient(180deg, hsla(30, 53%, 87%, 1) 0%, hsla(31, 52%, 86%, 1) 42%, hsla(30, 51%, 83%, 1) 69%, hsla(31, 52%, 81%, 1) 100%, hsla(31, 52%, 87%, 1) 100%, hsla(32, 51%, 86%, 1) 100%, hsla(31, 52%, 87%, 1) 100%)",
          filter:
            "progid: DXImageTransform.Microsoft.gradient( startColorstr='#F0DFCE', endColorstr='#EEDCC9', GradientType=1 )",
        }}
      >
        <p className="p-10 text-7xl text-black font-bold">Why Choose Us</p>
        <div>
          <div className="mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 flex justify-center flex-col items-center">
                <EscalatorWarningRoundedIcon sx={{ fontSize: 80 }} />
                <h3 className="feature-title text-xl font-semibold mt-2">
                  Wide selection
                </h3>
                <p className="mt-2 font-light">
                  Choose from a diverse range of rental properties with various
                  locations, sizes, amenities, and price points.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <SearchIcon sx={{ fontSize: 80 }} />
                <h3 className="feature-title text-xl font-semibold mt-2">
                  Transparency
                </h3>
                <p className="mt-2 font-light">
                  Access detailed property information and tenant reviews to
                  make informed rental decisions.
                </p>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <AccessTimeIcon sx={{ fontSize: 80 }} />
                <h3 className="feature-title text-xl font-semibold mt-2">
                  Time and cost efficiency
                </h3>
                <p className="mt-2 font-light">
                  Save time and money by efficiently browsing listings and
                  contacting landlords directly through the website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CarouselComponent />
      </section>
    </>
  );
};

export default ReviewSection;
