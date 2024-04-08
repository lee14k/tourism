import React from "react";
import Slider from "./Slider";
const ExploreBox: React.FC = () => {
  return (
    <div className="explore-box grid grid-cols-2">
      <div className="text-column flex flex-col justify-center items-center">
        <span className="text-6xl">Come visit the beautiful tropics of Taniti</span>
       
      </div>

      <Slider />
    </div>
  );
};

export default ExploreBox;
