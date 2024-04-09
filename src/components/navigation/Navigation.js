import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "../../pages/components/Offcanvas.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [homePageColor, setHomePageColor] = useState("text-black");
  const [roomPageColor, setRoomPageColor] = useState("text-black");
  const [thingsToDoPageColor, setThingsToDoPageColor] = useState("text-black");
  const [facilitiesPageColor, setFacilitiesPageColor] = useState("text-black");
  const [contactPageColor, setContactPageColor] = useState("text-black");

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    location.pathname === "/"
      ? setHomePageColor("underline underline-offset-4")
      : setHomePageColor("");

    location.pathname === "/Rooms"
      ? setRoomPageColor("underline underline-offset-4")
      : setRoomPageColor("");

    location.pathname === "/ThingsToDo"
      ? setThingsToDoPageColor("underline underline-offset-4")
      : setThingsToDoPageColor("");

    location.pathname === "/Facilities"
      ? setFacilitiesPageColor("underline underline-offset-4")
      : setFacilitiesPageColor("");

    location.pathname === "/Contact"
      ? setContactPageColor("underline underline-offset-4")
      : setContactPageColor("");
  }, [location.pathname]);

  return (
    <Fragment>
      {/*-------------------- SMALL SCREEN NAVBAR --------------------*/}
      <nav>
        <div className={`offcanvas ${isOpen ? "open" : ""}`}>
          <div className="text-black text-md flex justify-center border float-end border-black rounded border-dotted mt-8 px-6 py-5 cursor-pointer w-1/12 md:text-xl">
            <button onClick={toggleOffcanvas}>
              <FaTimes className="hover:text-red-600 active:text-white " />
            </button>
          </div>
          <div className="offcanvas-content font-serif mt-28 md:mt-32">
            <ul className="text-black text-center grid justify-center items-center text-2xl gap-12 md:text-3xl ">
              <li className={`hover:decoration-red-600 ${homePageColor}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`hover:decoration-red-600 ${roomPageColor}`}>
                <Link to="/Rooms">Rooms</Link>
              </li>
              <li className={`hover:decoration-red-600 ${thingsToDoPageColor}`}>
                <Link to="/ThingsToDo">Things To Do</Link>
              </li>
              <li className={`hover:decoration-red-600 ${facilitiesPageColor}`}>
                <Link to="/Facilities">Facilities</Link>
              </li>
              <li className={`hover:decoration-red-600 ${contactPageColor}`}>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={toggleOffcanvas}
          className={`overlay ${isOpen ? "open" : ""}`}
        ></div>
      </nav>

      {/*-------------------- LARGE SCREEN NAVBAR --------------------*/}
      <nav className="w-128 m-auto lg:w-9/12 ">
        <div className="text-white flex justify-between my-8 font-serif relative md:my-7 lg:hidden">
          <h1 className="text-center ">
            <span className="text-xl font-bold">Royal Ember</span> <br /> Hotel
          </h1>
          <IoIosMenu
            className="mt-2 text-3xl md:text-4xl hover:text-red-600 cursor-pointer"
            onClick={toggleOffcanvas}
          />
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="hidden relative mt-8 lg:flex lg:gap-14">
            <h1 className="text-center">
              <span className="text-xl font-bold">Royal Ember</span> <br />
              Hotel
            </h1>

            <ul className="flex gap-4 text-white text-xl font-bold lg:text-sm cursor-pointer">
              <li className={`hover:decoration-red-600 ${homePageColor}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`hover:decoration-red-600 ${roomPageColor}`}>
                <Link to="/Rooms">Rooms</Link>
              </li>
              <li className={`hover:decoration-red-600 ${thingsToDoPageColor}`}>
                <Link to="/ThingsToDo">Things To Do</Link>
              </li>
              <li className={`hover:decoration-red-600 ${facilitiesPageColor}`}>
                <Link to="/Facilities">Facilities</Link>
              </li>
              <li className={`hover:decoration-red-600 ${contactPageColor}`}>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className=" relative hidden lg:flex">
            <div className="flex gap-4 text-xl mt-8 cursor-pointer">
              <FaTwitter className="opacity-75 hover:opacity-100" />
              <FaFacebook className="opacity-75 hover:opacity-100" />
              <FaSquareInstagram className="opacity-75 hover:opacity-100" />
            </div>
            <button className="border p-2 px-4 rounded relative hover:bg-slate-100 hover:text-black m-4 mt-5 ml-12">
              Reservation
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
