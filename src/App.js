import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Products />} />
        <Route path="/inicio/:genero" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
