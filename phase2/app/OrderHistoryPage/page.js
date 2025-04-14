import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OrderHistory from "../components/OrderHistory";

export default function Layout({ children }) {
    return (
      <div className="bg-blue-400 min-h-screen flex flex-col">
        <Navbar/>
          <main className="flex-grow">
            <div>
                <OrderHistory /> 
            </div>
          </main>
          <Footer />
      </div>
    );
  }