import React from "react";

const Features = () => {
  return (
    <div>
      {/* Features section */}
      <section className="w-full flex justify-center relative">
        <div className="py-18 w-[85%] relative">
          {/* 1st feature */}
          <div className="flex flex-col gap-y-5 lg:flex-row items-center justify-between px-2.5">
            <div className="">
              <h1 className="gerbil text-3xl xl:text-4xl tracking-wide leading-13">
                <span className="relative inline-block">
                  Tomorrow
                  <svg
                    className="absolute left-0 -bottom-2 w-full z-[-1]"
                    viewBox="0 0 372 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                      stroke="#FFC250"
                      strokeWidth="3"
                    />
                  </svg>
                </span>{" "}
                should <br /> be better than
                <span className="relative inline-block px-6 pb-3">
                  <svg
                    width="300"
                    height="81"
                    viewBox="0 0 340 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -z-10 left-3 -top-1"
                  >
                    <rect width="170" height="61" rx="40.5" fill="#D7EEDD" />
                  </svg>
                  today
                </span>
              </h1>
              <p className="inter max-w-[480px] mt-1 tracking-tight [word-spacing:1.7px]">
                We are a team of strategists, designers communicators,
                researchers. Togeather, we belive that progress only happens
                when you refuse to play things safe.
              </p>
              <span className="inter mt-5 text-sm flex gap-2 items-center tracking-tight">
                Read more
                <svg
                  width="95"
                  height="6"
                  viewBox="0 0 145 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <path
                    d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <div className="w-70 md:w-100 relative">
              <img src="/images/feature1.png" alt="feature image" />
              <svg
                width="152"
                height="220"
                viewBox="0 0 233 227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 -right-15 -z-10"
              >
                <path
                  d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z"
                  fill="#FF7171"
                />
              </svg>
            </div>
          </div>

          {/* 2nd feature */}
          <div className="flex flex-col gap-y-5 lg:flex-row-reverse items-center justify-between px-2.5 py-28">
            <div>
              <h1 className="gerbil text-3xl xl:text-4xl tracking-wide leading-13 lg:pl-5.5">
                <span className="relative inline-block">
                  <svg
                    className="absolute z-[-1]"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "110%",
                      height: "120%",
                    }}
                    viewBox="0 0 172 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="172" height="80" rx="40" fill="#D7EEDD" />
                  </svg>
                  See
                </span>{" "}
                how we can <br /> help you{" "}
                <span className="relative inline-block">
                  Progress
                  <svg
                    className="absolute left-0 -bottom-1 w-full z-[-1]"
                    viewBox="0 0 372 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                      stroke="#FFC250"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h1>
              <p className="inter max-w-[480px] tracking-tighter [word-spacing:3px] lg:pl-5.5 py-4.5">
                We add a layer of fearless insights and action that allows
                change makers to accelerate their progress in areas such as
                brand, design digital, comms and social research.
              </p>
              <span className="inter text-sm flex gap-2 items-center tracking-tight lg:pl-5.5">
                Read more
                <svg
                  width="95"
                  height="6"
                  viewBox="0 0 145 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <path
                    d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <div className="relative w-70 md:w-100">
              <img src="/images/feature2.png" alt="feature image" />
              {/* triangle 1 */}
              <svg
                width="238"
                height="201"
                viewBox="0 0 238 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-40 -right-6 -bottom-11 z-10"
              >
                <path
                  d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z"
                  fill="#FF7171"
                />
              </svg>
              {/* triangle 2 */}
              <svg
                width="238"
                height="201"
                viewBox="0 0 238 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-40 -left-3 -top-9 -z-10"
              >
                <path
                  d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z"
                  fill="#FF7171"
                />
              </svg>
            </div>
          </div>
        </div>

{/* zigzag line */}
          <svg
            width="1000"
            height="654"
            viewBox="0 0 1483 654"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-75 right-0 -z-10"
          >
            <g filter="url(#filter0_d_2_9)">
              <path
                d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
                stroke="#FF6D6D"
                stroke-width="5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_9"
                x="0"
                y="0"
                width="1502.99"
                height="653.604"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_9"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

      </section>
    </div>
  );
};

export default Features;
