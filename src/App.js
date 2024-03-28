import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import Basket from "./pages/Basket";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Category from "./components/Category";
import AdminProducts from "./components/AdminProducts";
import { useSelector } from "react-redux";

function App() {
  const { dark } = useSelector((s) => s);
  return (
    <div
      className="App"
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/productDetails/:proId" element={<ProductDetails />} />
        <Route path="/search/:proName" element={<Search />} />
        <Route path="/category" element={<Category />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
