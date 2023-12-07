import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./Routes";

import { ShopHomePage } from "./ShopRoutes.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import SellerProtectedRotue from "./routes/SellerProtectedRoute.jsx";
function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  return (
    // <>
    //   {loading || isLoading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute >
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* Shop Routes */}
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            <Route
              path="/shop/:id"
              element={
                <SellerProtectedRotue>
                  <ShopHomePage />
                </SellerProtectedRotue>
              }
            />
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
    //   )}
    // </>
  );
}

export default App;
