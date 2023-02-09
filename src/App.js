import HeroComp from "./components/HeroComp";
import NavbarComp from "./components/NavbarComp";
import GalleryComp from "./components/GalleryComp";
import  ServiceComp from "./components/ServiceComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div>
      <HeroComp/>
      
      {/* Bagian isi */}
      
      <NavbarComp />
      <GalleryComp />
      <ServiceComp />
      <FaqComp />
      <FooterComp/>
    </div>
  );
}

export default App;
