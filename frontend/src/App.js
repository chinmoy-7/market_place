import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage,HomePage,ProductsPage,BestSellingPage,EventPage,FAQPage } from "./Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./server";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
function App() {
  const {loading} = useSelector((state)=>state.user)
  console.log(loading)
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
      <>
        {loading?(null):(    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/best-selling" element={<BestSellingPage/>} />
        <Route path="/events" element={<EventPage/>} />
        <Route path="/faq" element={<FAQPage/>} />
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
    </BrowserRouter>)}
      
      </>
  );
}

export default App;
