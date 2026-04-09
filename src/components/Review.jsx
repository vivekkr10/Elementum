import React from "react";

const Review = () => {
  return (
    <div className="review">
      <section className="review__section">
        <div className="review__container">
            <img
              src="/images/Ellipse 263.png"
              alt="review image 1"
              className="review__image review__image--1"
            />
            <img
              src="/images/Ellipse 266.png"
              alt="review image 2"
              className="review__image review__image--2"
            />
            <img
              src="/images/Ellipse 267.png"
              alt="review image 3"
              className="review__image review__image--3"
            />
            <img
              src="/images/Ellipse 268.png"
              alt="review image 4"
              className="review__image review__image--4"
            />
            <img
              src="/images/Ellipse 269.png"
              alt="review image 5"
              className="review__image review__image--5"
            />
            <img
              src="/images/Ellipse 270.png"
              alt="review image 6"
              className="review__image review__image--6"
            />
            <img
              src="/images/Ellipse 264.png"
              alt="review image 7"
              className="review__image review__image--7"
            />
            <img
              src="/images/Ellipse 265.png"
              alt="review image 8"
              className="review__image review__image--8"
            />

            {/* content */}
            <div className="review__content">
              <h1 className="review__title gerbil">
                <span className="review__title-highlight">
                  <svg
                    width="140"
                    height="62"
                    viewBox="0 0 207 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="review__svg-bg"
                  >
                    <rect width="207" height="70" rx="35" fill="#D7EEDD" />
                  </svg>
                  What
                </span>
                {""}
                our customer <br />
                says
                <span className="review__title-highlight">
                  About Us
                  <svg
                    width="260"
                    height="33"
                    viewBox="0 0 372 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="review__svg-underline"
                  >
                    <path
                      d="M45.0338 1.5H336.4L0.0641479 15.9H371.064L183.066 31.5"
                      stroke="#FFC250"
                      stroke-width="3"
                    />
                  </svg>
                </span>
              </h1>
              <div className="review__card">
                <p className="review__text inter">
                  {" "}
                  <span className="review__title-highlight">
                    <span className="review__quote-mark review__quote-mark--left">
                      &ldquo;
                    </span>
                    Elementum
                  </span>{" "}
                  delivered the site with inthe timeline as they requested.
                  Inthe end, the client found a 50% increase in traffic with in
                  days since its launch. They also had an impressive ability to
                  use technologies that the company hasn`t used, which have also
                  proved to be easy to use and{" "}
                  <span className="review__title-highlight">
                    {" "}
                    <span className="review__quote-mark review__quote-mark--right">
                      &rdquo;
                    </span>
                    reliable
                  </span>
                </p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Review;
