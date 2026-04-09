import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer section */}
      <section>
        <div className="footer">
          <div className="footer__cta">
            <h1 className="footer__title gerbil">
              Subscribe to <br />
              our newsletter
            </h1>
            <p className="footer__subtitle inter">
              To make your stay special and even more memorable
            </p>
            <button className="footer__button inter">
              Subscribe Now
            </button>
          </div>
          <div className="footer__links-container">
            <div className="footer__col">
              <h4 className="footer__col-title gerbil">Company</h4>
              <ul className="footer__list inter">
                <li>Home</li>
                <li>Studio</li>
                <li>Service</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title gerbil">Terms & Policies</h4>
              <ul className="footer__list inter">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Explore</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title gerbil">Follow Us</h4>
              <ul className="footer__list inter">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title gerbil">Contact Info</h4>
              <ul className="footer__list inter">
                <li>
                  1498w Fluton ste, STE <br />
                  2D Chicgo, IL 63867.
                </li>
                <li>(123) 456789000</li>
                <li>info@elementum.com</li>
              </ul>
            </div>
          </div>
          <p className="footer__copyright inter">
            ©2026 Elementum. All rights reserved
          </p>

          {/* vector lines */}
          <svg
            width="170"
            height="82"
            viewBox="0 0 178 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="footer__decoration footer__decoration--1"
          >
            <path
              d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
              fill="#FF6D6D"
            />
          </svg>

          <svg
            width="170"
            height="82"
            viewBox="0 0 178 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="footer__decoration footer__decoration--2"
          >
            <path
              d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
              fill="#FF6D6D"
            />
          </svg>

          {/* semi-circle */}
          <svg
            width="122"
            height="228"
            viewBox="0 0 183 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="footer__decoration footer__decoration--3"
          >
            <path
              d="M60.9994 227.653C47.1247 219.642 34.9637 208.977 25.2106 196.267C15.4576 183.557 8.30358 169.05 4.15702 153.575C0.0104423 138.099 -1.04745 121.959 1.04373 106.075C3.1349 90.1908 8.33419 74.8742 16.3447 60.9995C24.3553 47.1248 35.0202 34.9638 47.7306 25.2108C60.441 15.4577 74.948 8.3037 90.4232 4.15712C105.898 0.0105539 122.039 -1.04734 137.923 1.04383C153.807 3.13501 169.123 8.3343 182.998 16.3449L121.999 121.999L60.9994 227.653Z"
              fill="#934CEC"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Footer;
