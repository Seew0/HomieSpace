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
        className=" h-full bg-slate-900 text-white/80 flex flex-col justify-center items-center"
      >
        {/* <div className="bg-black/10 "> */}
        <p className="p-24 text-7xl font-bold">Why Choose Us</p>
        <div>
          <div className="mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-64">
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
        {/* </div> */}
      </section>
    </>
  );
};

export default ReviewSection;
