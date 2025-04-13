import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ItemList from "./components/itemlist";
import SearchBar from "./components/searchbar";
import filter from "./components/filter";

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
