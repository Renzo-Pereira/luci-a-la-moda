import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />  
      <Footer />
    </div>
  );
}

export default App;
