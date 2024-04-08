import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="homeheader">
      <div className=" flex flex-col justify-center items-center">
        <div className="my-12">
          <div className="flex flex-col justify-center items-center ">
            <div className="mx-48 my-32 text-center">
              <h2 className="text-8xl text-white text-center">
                Welcome to Taniti
              </h2>
              <div></div>
              <p className="mr-24 text-white text-2xl">
                {" "}
                Taniti is the premier tropical destination, perfect for couples,
                families, or people just looking for a good time{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
