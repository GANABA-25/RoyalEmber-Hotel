import { Fragment } from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Customers from "../../components/Customers";

const stars = (
  <div className="flex">
    <IoStar />
    <IoStar />
    <IoStar />
    <IoStar />
    <IoStarHalf />
  </div>
);

const GuestData = [
  {
    stars: stars,
    comments:
      "Amazing stay! The staff was incredibly welcoming, and the room was both comfortable and stylish. Highly recommend for a memorable experience!",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613445/RoyalEmber%20Hotel/Gusets/Paul_2_dve5ij.jpg",
    name: "Paul Yeboah Asamoah",
  },
  {
    stars: stars,
    comments:
      "Had a wonderful time! The staff was attentive, the room was cozy, and the central location made it easy to explore. Will definitely be coming back!",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613430/RoyalEmber%20Hotel/Gusets/Kusi_lbhpp6.jpg",
    name: "Issac Kusi",
  },
  {
    stars: stars,
    comments:
      "Impressed by the hotel's charm and hospitality. The room was clean, and the service was exceptional. A delightful stay overall!",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613449/RoyalEmber%20Hotel/Gusets/Dennis_cjeawx.jpg",
    name: "Dennis Owusu",
  },

  {
    stars: stars,
    comments:
      "Perfect getaway! The hotel exceeded expectations with its modern yet inviting atmosphere. The staff's friendliness and the convenient location made our stay truly enjoyable.",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613439/RoyalEmber%20Hotel/Gusets/Marina_dndhxk.jpg",
    name: "Marina Opoku Brefo",
  },
];
const Guests = (props) => {
  return (
    <Fragment>
      <div className="bg-gray-100 w-128 m-auto lg:w-9/12 font-serif py-12 p-4">
        <div>
          <div className="md:flex md:justify-between lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <h1 className="text-4xl lg:text-5xl">
                What Our Guests <br className="lg:hidden" /> Say
              </h1>
              <p className="my-8">
                Our hotel stay was exceptional impeccable <br /> service,
                stylish decor, and convenient <br />
                amenities in the heart of the city.
              </p>
            </div>
            <div className="flex gap-12 my-14 md:my-0">
              <div>
                <h1 className="text-4xl font-bold md:text-5xl">4.6</h1>
                <p className="my-1 md:text-xl">out of 5</p>
                <div className="flex text-indigo-600">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalf />
                </div>
              </div>
              <div className="opacity-70 md:text-xl lg:text-md">
                <p className="flex gap-3 my-1">
                  <FaGoogle className="mt-1" />
                  1920 Ratings
                </p>
                <p className="flex gap-3 my-1">
                  <FaSquareInstagram className="mt-1" />
                  960 Ratings
                </p>
                <p className="flex gap-3 my-1">
                  <FaFacebook className="mt-1" />
                  1024 Likes
                </p>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-10">
            {GuestData.map((Guest) => (
              <Customers
                stars={Guest.stars}
                comments={Guest.comments}
                image={Guest.image}
                name={Guest.name}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Guests;
