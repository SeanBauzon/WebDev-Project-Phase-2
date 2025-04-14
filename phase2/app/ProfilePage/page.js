import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
    return (
      <div className="bg-blue-400 min-h-screen flex flex-col">
        <Navbar/>
          <main className="flex-grow">
            <div>
                <Profile /> 
            </div>
          </main>
          <Footer />
      </div>
    );
  }