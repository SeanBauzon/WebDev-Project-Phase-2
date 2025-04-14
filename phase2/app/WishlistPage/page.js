import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Wishlist from "../components/Wishlist";

export default function Layout({ children }) {
    return (
      <div className="bg-blue-400 min-h-screen flex flex-col">
        <Navbar/>
          <main className="flex-grow">
            <div>
                <Wishlist /> 
            </div>
          </main>
          <Footer />
      </div>
    );
  }