import { Fragment } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

const Footer = () => {
  return (
    <Fragment>
      <div className="w-128 m-auto lg:w-9/12 font-serif mt-14 text-center md:text-start md:grid md:grid-cols-2 md:gap-12 md:mt-24 lg:grid-cols-4">
        <div>
          <h1 className="font-bold">
            <span className="text-2xl">Royal Ember</span> <br />
            <span className="text-md">Hotel</span>
          </h1>
          <p className=" my-4 opacity-60">
            Royal Ember Hotel embodies opulence and regal charm,
            offeringluxurious accommodations, fine dining, and a
            state-of-the-art spa.Known for impeccable hospitality, it provides a
            warm, inviting atmosphere for a truly royal experience.
          </p>

          <div className=" text-2xl text-indigo-700 flex justify-center items-center gap-4 md:justify-start md:items-start lg:text-xl">
            <FaInstagram />
            <SiTripadvisor />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        <div className="mt-12 md:mt-0 opacity-60">
          <h1 className="text-2xl my-4 font-bold">Hotel</h1>
          <ul className="my-4 grid gap-2">
            <li>About Us</li>
            <li>Reviews</li>
            <li>Directions</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="mt-12 opacity-60 lg:mt-0">
          <h1 className="text-2xl my-4 font-bold">Customer Help</h1>
          <ul className="my-4 grid gap-2">
            <li>Customer Support</li>
            <li>Guest Feedback</li>
            <li>SiteMap</li>
            <li>Responsible Disclosure</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="mt-12 opacity-60 lg:mt-0">
          <h1 className="text-2xl my-4 font-bold">Customer</h1>
          <ul className="my-4 grid gap-2">
            <li> Royal Ember Hotel</li>
            <li>1234 Market Street,</li>
            <li>San Fransisco, CA 98765</li>
            <li>+233 596-498-006</li>
            <li>mail@example.com</li>
          </ul>
        </div>

        <div className="mt-24 border-t-2 p-8 opacity-60 md:hidden lg:hidden">
          <p>
            Copyright © 2024 Royal Ember Hotel | Powered by Royal Ember Hotel
          </p>
        </div>
      </div>
      <div className=" text-center mt-20 border-t-2 p-8 md:flex md:justify-center md:items-center md:py-14  hidden md:block lg:block">
        <p>Copyright © 2024 Royal Ember Hotel | Powered by Royal Ember Hotel</p>
      </div>
    </Fragment>
  );
};

export default Footer;
