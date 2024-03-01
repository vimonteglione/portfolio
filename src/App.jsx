import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import MobileContact from "./components/mobile-contact/MobileContact";
import ProductList from "./components/productList/ProductList";


const App = () => {
  return (
    <div>
      <Intro />
      <MobileContact />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;