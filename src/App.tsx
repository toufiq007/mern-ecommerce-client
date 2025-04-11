import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import ShoppingViewLayout from "./components/shoppping-view/Layout";
import NotFoundPage from "./pages/notfound";
import CheckoutPage from "./pages/shopping-view/checkout";
import HomePage from "./pages/shopping-view/home";
import ProductListing from "./pages/shopping-view/productsListing";

function App() {
  return (
    <>
      {/* every common components that should be present every pages */}
      {/* <h1>header components</h1> */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* here doesn't give /login or /register only give login and register to the path property */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* admin view pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* shopping view pages */}
        <Route path="/shop" element={<ShoppingViewLayout />}>
          <Route path="home" element={<HomePage/>} />
          <Route path="checkout" element={<CheckoutPage/>} />
          <Route path="listing" element={<ProductListing/>} />
        </Route>

        {/* not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
