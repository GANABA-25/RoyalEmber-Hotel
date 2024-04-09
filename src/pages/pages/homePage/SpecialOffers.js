import Button from "../../../components/Button";
import GoodPlaces from "../../components/GoodPlaces";
const SpecialOffers = () => {
  return (
    <div className="w-128 m-auto md:mt-20 lg:w-9/12 font-serif ">
      <div className="text-center md:flex md:justify-between md:mb-8 lg:mb-4 lg:flex lg:justify-between">
        <h1 className="text-4xl my-8 md:my-0 md:text-5xl lg:text-5xl">
          Special Offer
        </h1>
        <Button name="View All Offers" />
      </div>
      <div className="grid gap-y-0.5 md:flex md:gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
        <GoodPlaces
          image="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613514/RoyalEmber%20Hotel/LangingPage/gift_dyekcu.jpg"
          tittle="Stay 3 Nights & Save!"
          description="Amet elementum vitae ultrices accumsan est nunc, ut mattis enim leo sed dolor ultrices habitant lacus auctor lectus sagittis."
          read="view Detail"
        />
        <GoodPlaces
          image="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613515/RoyalEmber%20Hotel/LangingPage/personPhone_clytjh.jpg"
          tittle="Mobile Only Discount"
          description="Amet elementum vitae ultrices accumsan est nunc, ut mattis enim leo sed dolor ultrices habitant lacus auctor lectus sagittis."
          read="view Detail"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
