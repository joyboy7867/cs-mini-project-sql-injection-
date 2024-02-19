import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
const Hero = () => {
    return <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-4xl lg:text-6xl mb-4 font-bold text-gray-900">Welcome to 
        <br className="hidden lg:inline-block"/> E-CART
      </h1>
      <p className="mb-8 leading-relaxed">E-Cart is where your shopping journey begins! Discover a world of endless possibilities and find everything you need right at your fingertips.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none items-center gap-3 hover:bg-indigo-600 rounded text-lg">Download <IoLogoGooglePlaystore /></button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none items-center gap-3 hover:bg-gray-200 rounded text-lg">Download <FaAppStoreIos /></button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-2xl" alt="hero" src="https://focusondigital.co.uk/wp-content/uploads/2022/10/ecom_2.png"/>
    </div>
  </div>
</section>
    </div>;
}



export default Hero;