import React from "react";
import { IoMdAlert } from "react-icons/io";

import { IoTime } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaFax } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io5";
import { MdPets } from "react-icons/md";

const HotelInformation = () => {
  return (
    <div className="w-128 m-auto lg:w-9/12 font-serif md:my-24">
      <div className="md:hidden lg:hidden">
        <h1 className="text-3xl my-4 md:mb-8 md:text-4xl">Hotel Information</h1>
        <IoMdAlert className="text-4xl text-indigo-700 my-4 md:hidden" />
        <h1 className="uppercase my-2 opacity-90 md:flex md:gap-4">
          <IoMdAlert className="text-4xl text-indigo-700 hidden md:block" />
          Hotel Alert
        </h1>
        <p className="opacity-70 md:ml-12">
          Some hotel features, including vitae, varius ipsum ultrices adipiscing
          senectus turpis non <br className="hidden md:block" /> due to
          COVID-19.
        </p>
      </div>

      <h1 className="text-3xl my-4 md:mb-8 md:text-4xl lg:text-5xl">
        Hotel Information
      </h1>

      <div className="lg:flex lg:justify-between">
        <div className="hidden lg:block mt-4">
          <div className="md:flex md:gap-4">
            <IoMdAlert className="text-3xl text-indigo-700 hidden md:block" />
            <div>
              <h1 className="uppercase text-sm mb-2">Hotel Alert</h1>
              <p className="opacity-70">
                Some hotel features, <br className="hidden lg:block" />{" "}
                including vitae, varius ipsum <br className="hidden lg:block" />
                ultrices adipiscing senectus <br className="hidden lg:block" />
                turpis non <br className="hidden md:block" /> due to COVID-19.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 lg:mt-4 md:grid-cols-3 md:gap-9">
          <div>
            <IoTime className="text-indigo-700 text-3xl my-4 md:hidden" />
            <h1 className="md:flex md:gap-4">
              <IoTime className="text-indigo-700 text-3xl hidden md:block" />
              CHECK-IN
            </h1>
            <p className="my-2 opacity-70 md:ml-12 md:my-0">04:00 PM</p>
          </div>

          <div>
            <FaPhoneFlip className="text-indigo-700 text-3xl my-4 md:hidden" />
            <h1 className="md:flex md:gap-4">
              <FaPhoneFlip className="text-indigo-700 text-3xl hidden md:block" />
              PHONE NUMBER
            </h1>
            <p className="my-2 opacity-70 md:ml-12 md:my-0">
              (+233) 596-498-006
            </p>
          </div>

          <div>
            <IoLogoNoSmoking className="text-indigo-700 text-3xl my-4 md:hidden" />
            <h1 className="md:flex md:gap-4">
              <IoLogoNoSmoking className="text-indigo-700 text-3xl hidden md:block" />
              NO SMOKING
            </h1>
            <p className="my-2 opacity-70 md:ml-12 md:my-0">100% Smoke Free</p>
          </div>

          <div>
            <IoMdTime className="text-indigo-700 text-3xl my-4 md:hidden" />
            <h1 className="md:flex md:gap-4">
              <IoMdTime className="text-indigo-700 text-3xl hidden md:block" />
              CHECK-OUT
            </h1>
            <p className="my-2 opacity-70 md:ml-12 md:my-0">11:00 AM</p>
          </div>

          <div>
            <FaFax className="text-indigo-700 text-3xl my-4 md:hidden" />
            <h1 className="md:flex md:gap-4">
              <FaFax className="text-indigo-700 text-3xl hidden md:block" />
              FAX NUMBER
            </h1>
            <p className="my-2 opacity-70 md:ml-12 md:my-0">
              (+233) 596-498-006
            </p>
          </div>

          <div>
            <MdPets className="text-indigo-700 text-3xl my-4 md:hidden" />
            <h1 className="md:flex md:gap-4">
              <MdPets className="text-indigo-700 text-3xl hidden md:block" />
              PET POLICY
            </h1>
            <p className="my-2 opacity-70 md:ml-12 md:my-0">Pet Allowed: Yes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInformation;
