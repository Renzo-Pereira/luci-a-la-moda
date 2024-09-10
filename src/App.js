import "./App.css";
import Details from "./components/details/details";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:genero" element={<Products />} />
        <Route path="/details/:slug" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
