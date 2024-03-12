import Image from "next/image";


const Header: React.FC = () => {
  return (
    <div className="homeheader">
      <div className=" flex flex-col justify-center items-center">
      
        <div className="my-12">
        <div className="flex flex-col justify-center items-center ">
        <div className="mx-48 my-32">
          <h2 className="text-4xl">Welcome to Taniti</h2>
          <div>
            <h3 className="bgClip">At the crossroads of the UP</h3>
          </div>
          <p className="mr-24">Welcome to Jack's, where family and flavor come together in the heart of Rapid River! Our cozy diner-style restaurant has been serving up delicious meals and warm smiles for generations. From mouthwatering breakfasts to hearty lunches and hand-smoked BBQ and dinners, we take pride in offering dishes made with love.</p>
        </div>
        </div>
      </div>
     
      </div>
    </div>
  )
}

export default Header;
