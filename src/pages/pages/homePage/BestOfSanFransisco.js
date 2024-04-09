import React from "react";
import Button from "../../../components/Button";
import GoodPlaces from "../../components/GoodPlaces";

const SanFransiscoData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613482/RoyalEmber%20Hotel/LangingPage/alcatraz_hprjwd.jpg",
    tittle: "Alcatraz Island",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
    read: "Learn More",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613490/RoyalEmber%20Hotel/LangingPage/fisherman_zwtrai.jpg",
    tittle: "Fisherman's Wharf",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
    read: "Learn More",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613513/RoyalEmber%20Hotel/LangingPage/goldenGate_zg9gx2.jpg",
    tittle: "Golden Gate Park",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
    read: "Learn More",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613506/RoyalEmber%20Hotel/LangingPage/garden_pqvma7.jpg",
    tittle: "Queen Wilhelmina Tulip Garden",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
    read: "Learn More",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613517/RoyalEmber%20Hotel/LangingPage/ocean_beach_dam0do.jpg",
    tittle: "Ocean Beach",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
    read: "Learn More",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712613488/RoyalEmber%20Hotel/LangingPage/Dutch_Windmill_wjxzs1.jpg",
    tittle: "Dutch Windmill",
    description:
      "Ornare accumsan congue nunc id facilisis tincidunt ridiculus congue consequat ultrices in mollis netus pellentesque lectus.",
    read: "Learn More",
  },
];

const BestOfSanFransisco = (props) => {
  return (
    <div className="w-128 m-auto font-serif lg:w-9/12 mt-32 md:mt-40 lg:mt-52 ">
      <div className="text-center md:flex md:justify-between lg:mb-8">
        <h1 className="text-3xl font-bold  my-8 md:my-0 md:text-4xl lg:text-5xl">
          Best of San Fransisco
        </h1>
        <Button name="See All" />
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-6">
        {SanFransiscoData.map((BestOfSanFransisco) => (
          <GoodPlaces
            image={BestOfSanFransisco.image}
            tittle={BestOfSanFransisco.tittle}
            description={BestOfSanFransisco.description}
            read={BestOfSanFransisco.read}
          />
        ))}
      </div>
    </div>
  );
};

export default BestOfSanFransisco;
