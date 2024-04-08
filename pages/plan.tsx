import React, { ComponentType, useState } from "react";
import Lodging from "@/components/Lodging";
import Food from "@/components/Food";
import Navbar from "@/components/Navbar";
import Transportation from "@/components/Transportation";
const ParentComponent: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Food":
        return <Food />;
      case "Lodging":
        return <Lodging />;
      case "Transportation":
        return <Transportation />;
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="homeheader">
          <div className=" flex flex-col justify-center items-center">
            <div className="my-12">
              <div className="flex flex-col justify-center items-center ">
                <div className="mx-48 my-32">
                  <h2 className="text-8xl text-white">Plan your stay</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-evenly space-evenly py-12">
        <ul className="flex gap-24 text-2xl">
          <li>
            {" "}
            <button onClick={() => setActiveComponent("Food")}>Food</button>
          </li>
          <li>
            {" "}
            <button onClick={() => setActiveComponent("Lodging")}>
              Lodging
            </button>
          </li>
          <li>
            {" "}
            <button onClick={() => setActiveComponent("Transportation")}>
              Transportation
            </button>
          </li>
        </ul>
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
