import Image from "next/image";
import Search from "./components/search";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";

export default function Home() {
  return (<>
 
  <Hero/>
  <Categories/>
  <Search/>
  </>
  
  
  );
}
