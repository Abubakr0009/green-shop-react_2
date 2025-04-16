import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import LoginForm from "./components/Login";
import MyProducts from "./Dashboard/myproducts";
import Card from "./Dashboard/Card";
import RegisterForm from "./components/Register";
import TrackOrder from "./Dashboard/Track Order";
import Address from "./Dashboard/Address";
import Wishlist from "./Dashboard/Wishlist";
import { ToastContainer } from "react-toastify";
import ProductCard from "./components/ProductCard";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          path="/login"
          element={<LoginForm user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<RegisterForm user={user} setUser={setUser} />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/dashboard/myProducts" element={<MyProducts />} />
        <Route path="/dashboard/trackOrder" element={<TrackOrder />} />
        <Route path="/dashboard/address" element={<Address />} />
        <Route path="/dashboard/wishlist" element={<Wishlist />} />
        <Route path="/dashboard/card/:id" element={<Card />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
