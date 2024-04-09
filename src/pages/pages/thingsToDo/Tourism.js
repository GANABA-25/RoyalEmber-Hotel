import { Fragment } from "react";
import Button from "../../../components/Button";

const Tourism = ({ isActive, image, number, tittle, description }) => {
  return (
    <Fragment>
      <div className="lg:hidden mb-14 md:mb-0 ">
        <div className="mt-8 md:flex md:gap-12">
          <div>
            <img
              className="rounded-lg md:w-97 lg:w-98"
              src={image}
              alt="first"
            />
          </div>

          <div>
            <h5 className="text-blue-600 my-3 text-xl">{number}.</h5>
            <h1 className="text-2xl mt-4 mb-2 md:text-4xl">{tittle}</h1>
            <p className="opacity-80">{description}</p>
            <div className="mt-8">
              <Button name="Get Direction" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="mt-8 md:flex md:gap-12">
          {isActive ? (
            <div>
              <img
                className="rounded-lg md:w-97 lg:w-98"
                src={image}
                alt="second"
              />
            </div>
          ) : null}

          <div className="md:w-97 lg:w-98">
            <h5 className="text-blue-600 my-3 text-xl">{number}.</h5>
            <h1 className="text-2xl mt-4 mb-2 md:text-4xl">{tittle}</h1>
            <p className="opacity-80">{description}</p>
            <div className="mt-4">
              <Button name="Get Direction" />
            </div>
          </div>

          {!isActive ? (
            <div>
              <img className="rounded-lg md:w-97 lg:w-98" src={image} alt="" />
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Tourism;
