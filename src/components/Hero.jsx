import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Hero section */}
      <section>
        <div className="relative flex flex-col items-center py-24 gap-5">
          {/* heading and content */}
          <h1 className="text-center gerbil text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tighter leading-15 md:leading-20">
            The{" "}
            <span className="relative inline-block">
              thinkers
              <svg
                className="absolute left-0 -bottom-4 w-full -z-10"
                viewBox="0 0 595 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53"
                  stroke="#FFC250"
                  strokeWidth="6"
                />
              </svg>
            </span>{" "}
            and <br /> doers were
            <span className="relative inline-block pl-5">
              <svg
                className="absolute z-[-1] hidden lg:block"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-35%, -35%)",
                  width: "140%",
                  height: "120%",
                }}
                viewBox="0 0 390 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="405" height="137" rx="68.5" fill="#FFC2EA" />
              </svg>
              changing
            </span>
            <br /> the
            <span className="relative inline-block px-6 mx-1 pb-3">
              <svg
                className="absolute inset-0 w-full h-full z-[-1]"
                viewBox="0 0 456 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="456" height="109" rx="54.5" fill="#D7EEDD" />
              </svg>
              status
            </span>
            Quo with
          </h1>
          <p className="text-center max-w-[560px] inter tracking-tight word-spacin [word-spacing:1px] px-2 sm:px-0">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only hghappens when you refuse to
            play things safe.
          </p>

          {/* ecllips */}
          <svg
            width="117"
            height="146"
            viewBox="0 0 117 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-55 right-[1em] xl:right-[3.75em] w-28 h-28 -z-10 hidden md:block"
          >
            <path
              d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z"
              fill="#934CEC"
            />
          </svg>

          {/*people images icon*/}
          <div className="w-full overflow-hidden px-7 py-8">
            <div className="flex h-75">
              {/* container 1 */}
              <div className="flex-1 relative">
                <div className="hidden md:block w-37 h-37 overflow-hidden rounded-full absolute bottom-6 -z-10">
                  <img
                    src="/images/image1.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-37 h-37 overflow-hidden rounded-full absolute top-23 right-14 border-5 border-white">
                  <img
                    src="/images/image2.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* container 2 */}
              <div className="flex-1 relative">
                <div className="hidden md:block w-37 h-37 overflow-hidden rounded-full absolute left-8">
                  <img
                    src="/images/image3.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-37 h-37 overflow-hidden rounded-full absolute bottom-0 right-10">
                  <img
                    src="/images/image4.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* container 3 */}
              <div className="flex-1 relative">
                <div className="hidden md:block w-37 h-37 overflow-hidden rounded-full absolute top-10 left-2 -z-10">
                  <img
                    src="/images/image5.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-37 h-37 overflow-hidden rounded-full absolute bottom-15 right-8 border-5 border-white">
                  <img
                    src="/images/image6.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* container 4 */}
              <div className="flex-1 relative">
                <div className="w-37 h-37 overflow-hidden rounded-full absolute">
                  <img
                    src="/images/image7.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-37 h-37 overflow-hidden rounded-full absolute right-0 bottom-12">
                  <img
                    src="/images/image8.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* zigzag lines */}
      <svg
        width="50"
        height="240"
        viewBox="0 0 70 365"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 left-0 top-98 hidden md:block"
      >
        <path
          d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812"
          stroke="#FF7171"
          strokeWidth="8"
        />
      </svg>
      <svg
        width="55"
        height="320"
        viewBox="0 0 82 435"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 left-8 top-95 hidden md:block"
      >
        <path
          d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
          stroke="#0E0E0E"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
};

export default Hero;
