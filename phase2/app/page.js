import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ItemList from "./components/Itemlist";
import SearchBar from "./components/Searchbar";
import Filter from "./components/Filter";

export default function Layout({ children }) {
  return (
    <div className="bg-blue-400 min-h-screen flex flex-col">
      <Navbar/>
        <SearchBar/>
        <main className="flex-grow">
          <div>
            <ItemList /> 
          </div>
        </main>
        <Footer />
    </div>
  );
}
