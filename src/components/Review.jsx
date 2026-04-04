import React from "react";

const Review = () => {
  return (
    <div className="mb-100">
      <section>
        <div className="pt-42 pb-30">
          <div className="w-full relative">
            <img
              src="/images/Ellipse 263.png"
              alt="review image 1"
              className="absolute w-20 xl:w-22 -top-10 left-26 -z-10"
            />
            <img
              src="/images/Ellipse 266.png"
              alt="review image 2"
              className="absolute w-12 top-26 left-12 -z-10"
            />
            <img
              src="/images/Ellipse 267.png"
              alt="review image 3"
              className="absolute w-18 xl:w-20 top-68 left-7 -z-10"
            />
            <img
              src="/images/Ellipse 268.png"
              alt="review image 4"
              className="absolute w-22 lg:w-30 xl:w-35 top-32 left-34 -z-10"
            />
            <img
              src="/images/Ellipse 269.png"
              alt="review image 5"
              className="absolute w-38 lg:w-42 xl:w-48 top-50 right-6 -z-10"
            />
            <img
              src="/images/Ellipse 270.png"
              alt="review image 6"
              className="absolute w-22 xl:w-24 -top-9 right-22 -z-10"
            />
            <img
              src="/images/Ellipse 264.png"
              alt="review image 7"
              className="absolute w-12 lgw-15 top-4 right-58 -z-10"
            />
            <img
              src="/images/Ellipse 265.png"
              alt="review image 8"
              className="absolute w-16 xl:w-18 top-29 right-51 -z-10"
            />

            {/* content */}
            <div className="absolute left-1/2 top-35 -translate-x-1/2 -translate-y-1/2">
              <h1 className="gerbil text-4xl text-center leading-11 tracking-wide">
                <span className="relative">
                  <svg
                    width="140"
                    height="62"
                    viewBox="0 0 207 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -z-10 -right-1 top-0"
                  >
                    <rect width="207" height="70" rx="35" fill="#D7EEDD" />
                  </svg>
                  What
                </span>
                {""}
                our customer <br />
                says
                <span className="relative">
                  About Us
                  <svg
                    width="260"
                    height="33"
                    viewBox="0 0 372 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -right-8 top-9 -z-10"
                  >
                    <path
                      d="M45.0338 1.5H336.4L0.0641479 15.9H371.064L183.066 31.5"
                      stroke="#FFC250"
                      stroke-width="3"
                    />
                  </svg>
                </span>
              </h1>
              <div className="bg-[#D7EEDD4D] py-8 px-4 md:px-12 mt-12 rounded-4xl">
                <p className="max-w-120 inter text:sm md:text-lg tracking-wider text-center leading-7">
                  {" "}
                  <span className="relative">
                    <span className="text-[150px] text-gray-300 leading-none absolute -top-9 -left-12 ">
                      &ldquo;
                    </span>
                    Elementum
                  </span>{" "}
                  delivered the site with inthe timeline as they requested.
                  Inthe end, the client found a 50% increase in traffic with in
                  days since its launch. They also had an impressive ability to
                  use technologies that the company hasn`t used, which have also
                  proved to be easy to use and{" "}
                  <span className="relative">
                    {" "}
                    <span className="text-[150px] text-gray-300 leading-none absolute -bottom-27 -right-14">
                      &rdquo;
                    </span>
                    reliable
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
