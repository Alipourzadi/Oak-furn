import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BrowserLayout from "../Layout/BrowserLayout";
import Home from "../pages";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ScrollToTop from "../hooks/scrollToTop";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BrowserLayout />}>
      <Route index element={<Home />} />
      <Route path="shop">
        <Route index element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);
