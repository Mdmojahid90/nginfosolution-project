import "./App.css";
import AdminAction from "./components/AdminAction";
import AllEmployees from "./components/AllEmployees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Cards />
      <AdminAction />
      <AllEmployees />
      <Footer />
    </>
  );
}

export default App;
