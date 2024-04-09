import React, { Fragment } from "react";

const Gallary = () => {
  return (
    <Fragment>
      <div className="w-128 m-auto lg:w-9/12 font-serif grid gap-5 mt-24 mb-12 md:hidden lg:hidden">
        <h1 className="text-center text-4xl font-bold opacity-80">Gallery</h1>
        <img
          className="rounded-md"
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613494/RoyalEmber%20Hotel/LangingPage/gallary_3_ekzfbe.jpg"
          alt="galleryImage2"
        />
        <img
          className="rounded-md"
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613495/RoyalEmber%20Hotel/LangingPage/gallary_4_trycw4.jpg"
          alt="galleryImage3"
        />
        <img
          className="rounded-md"
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613496/RoyalEmber%20Hotel/LangingPage/gallary_5_zs8ivs.jpg"
          alt="galleryImage4"
        />
        <img
          className="rounded-md"
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613497/RoyalEmber%20Hotel/LangingPage/gallary_6_xr4pg5.jpg"
          alt="galleryImage5"
        />
        <img
          className="rounded-md"
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613519/RoyalEmber%20Hotel/LangingPage/gallary_8_c1lgza.jpg"
          alt="galleryImage6"
        />
        <img
          className="rounded-md"
          src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613504/RoyalEmber%20Hotel/LangingPage/gallary_7_bf9tfj.jpg"
          alt="galleryImage7"
        />
      </div>

      <div className="w-128 m-auto lg:w-9/12 font-serif hidden gap-4 md:block ">
        <h1 className="text-center text-4xl font-bold opacity-80">Gallery</h1>
        <div className="my-8">
          <div className="md:flex md:gap-4">
            <div className="md:flex-none md:gap-4 md:w-56 md:h-56 lg:w-85 lg:h-85">
              <img
                className="rounded-md md:mb-4"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613494/RoyalEmber%20Hotel/LangingPage/gallary_3_ekzfbe.jpg"
                alt="galleryImage2"
              />
              <img
                className="rounded-md "
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613495/RoyalEmber%20Hotel/LangingPage/gallary_4_trycw4.jpg"
                alt="galleryImage3"
              />
            </div>
            <div>
              <img
                className="rounded-md lg:h-128"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613496/RoyalEmber%20Hotel/LangingPage/gallary_5_zs8ivs.jpg"
                alt="galleryImage4"
              />
            </div>
          </div>

          <div className="md:flex md:gap-4 md:mt-6 lg:mt-5">
            <div>
              <img
                className="rounded-md"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613497/RoyalEmber%20Hotel/LangingPage/gallary_6_xr4pg5.jpg"
                alt="galleryImage5"
              />
            </div>
            <div className="md:flex-none md:gap-4 md:w-60 md:h-60 lg:w-96 lg:h-96">
              <img
                className="rounded-md md:mb-5"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613504/RoyalEmber%20Hotel/LangingPage/gallary_7_bf9tfj.jpg"
                alt="galleryImage6"
              />
              <img
                className="rounded-md"
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613519/RoyalEmber%20Hotel/LangingPage/gallary_8_c1lgza.jpg"
                alt="galleryImage7"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallary;
