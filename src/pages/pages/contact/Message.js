import React, { Fragment, useState } from "react";
import Button from "../../../components/Button";

const Message = () => {
  const [name, setName] = useState();

  const NameInputHandler = (e) => {
    setName(e.target.value);
  };

  // console.log("nameInput", name);

  const submitHandler = () => {
    console.log(name);
  };
  return (
    <Fragment>
      <div className="w-128 m-auto lg:w-9/12 my-12">
        <div className="max-[767px]:my-8">
          <h1 className="max-[767px]:text-3xl font-serif font-bold md:text-4xl">
            Send a Message
          </h1>
          <p className="max-[767px]:my-4 opacity-80 md:my-5 md:text-xl lg:text-2xl">
            Volutpat eu mauris, arcu, consectetur nulla massa interdum interdum
            ornare senectus adipiscing eget nibh aliquam.
          </p>
        </div>

        <form onSubmit={submitHandler}>
          <div className="max-[767px]:p-4 grid max-[767px]:gap-4 justify-center items-center bg-gray-200 md:p-5 md:gap-5">
            <div className="flex max-[767px]:gap-2 md:gap-4">
              <div className="grid gap-1 md:gap-3">
                <labe className="md:text-2xl">
                  First Name <span className="text-red-600 text-xl">*</span>
                </labe>
                <input
                  className="max-[767px]:w-full max-[767px]:p-2 bg-grayDark focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-sm md:w-[20rem] md:p-4"
                  type="text"
                  placeholder="Please Enter Your Name"
                  onChange={NameInputHandler}
                  required
                />
              </div>

              <div className="grid gap-1 md:gap-3">
                <labe className="md:text-2xl">
                  Last Name <span className="text-red-600 text-xl">*</span>
                </labe>
                <input
                  className="max-[767px]:w-full max-[767px]:p-2 bg-grayDark focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-sm md:w-[20rem] md:p-4"
                  type="text"
                  placeholder="Please Enter Your Name"
                  required
                />
              </div>
            </div>
            <div className="grid gap-1 md:gap-3">
              <labe className="md:text-2xl">
                Email <span className="text-red-600 text-xl">*</span>
              </labe>
              <input
                className="max-[767px]:w-full max-[767px]:p-2 bg-grayDark focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-sm md:w-[41rem] md:p-4"
                type="email"
                placeholder="Please Enter Your Email"
                required
              />
            </div>
            <div className="grid gap-1 md:gap-3">
              <labe className="md:text-2xl">
                Subject <span className="text-red-600 text-xl">*</span>
              </labe>
              <input
                className="max-[767px]:w-full max-[767px]:p-2 bg-grayDark focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-sm md:w-[41rem] md:p-4"
                type="text"
                placeholder="Please Enter The Subject"
                required
              />
            </div>
            <div className="grid gap-1 md:gap-3">
              <labe className="md:text-2xl">
                Comment or Message
                <span className="text-red-600 text-xl"> *</span>
              </labe>
              <textarea
                className="max-[767px]:w-full max-[767px]:p-2 bg-grayDark focus:outline-none focus:ring-1 focus:ring-indigo-700 rounded-sm md:w-[41rem] md:p-4"
                type="textarea"
                placeholder="Message"
                required
              />
            </div>

            <button
              className="w-48 max-[767px]:mt-4 font-serif border border-indigo-700 text-indigo-700 p-2 px-7 rounded relative hover:bg-indigo-700 hover:text-white md:mt-5 md:text-2xl md:w-52"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Message;
