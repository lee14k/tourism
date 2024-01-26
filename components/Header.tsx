import Image from "next/image";


const Header: React.FC = () => {
  return (
    <div className="">
      <div className="headercontainer flex flex-col justify-center items-center">
        <Image
            alt="Logo"
          src="/newlogo.png"
          height={400}
          width={400}
        />
        <div className="my-12">
          <button className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Order Now!</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="mx-48 my-32">
          <h2 className="text-4xl">Hometown cooking</h2>
          <div>
            <h3 className="bgClip">At the crossroads of the UP</h3>
          </div>
          <p className="mr-24">Welcome to Jack's, where family and flavor come together in the heart of Rapid River! Our cozy diner-style restaurant has been serving up delicious meals and warm smiles for generations. From mouthwatering breakfasts to hearty lunches and hand-smoked BBQ and dinners, we take pride in offering dishes made with love.</p>
        </div>
      </div>
    </div>
  )
}

export default Header;
