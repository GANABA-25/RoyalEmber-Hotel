import { FaParking } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { MdLocalBar } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaBus } from "react-icons/fa6";
import { FaBicycle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const IconSection = (props) => {
  return (
    <div className="w-128 m-auto lg:w-9/12">
      <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-20">
        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <FaParking />
          </div>
          <h1 className="lg:text-xl font-medium">Free Parking</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <FaWifi />
          </div>
          <h1 className="lg:text-xl font-medium">Free Wi-fi</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <MdOutlinePets />
          </div>
          <h1 className="lg:text-xl font-medium">Pet Friendly</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <MdLocalBar />
          </div>
          <h1 className="lg:text-xl font-medium">Minibar</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <BiSolidTimeFive />
          </div>
          <h1 className="lg:text-xl font-medium">24-Hours Front Desk</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <FaBus />
          </div>
          <h1 className="lg:text-xl font-medium">Shuttle Bus Service</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <FaBicycle />
          </div>
          <h1 className="lg:text-xl font-medium">Bicycle Rental</h1>
        </div>

        <div>
          <div className="flex items-center justify-center text-indigo-600 text-4xl mb-4 md:text-5xl">
            <FaLocationDot />
          </div>
          <h1 className="lg:text-2xl font-medium">Downtown Location</h1>
        </div>
      </div>
    </div>
  );
};
export default IconSection;
