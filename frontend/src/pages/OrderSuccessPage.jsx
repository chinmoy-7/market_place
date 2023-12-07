import React from "react";
import { Footer } from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import Lottie, { useLottie } from "lottie-react";
import animationData from "../Assets/animations/success.json";

export const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);
  return (
    <div className="flex justify-center items-center flex-col">
      {/* <Lottie
    options={defaultOptions}
    width={300}
    height={300}
  /> */}
      <div className="w-[300px] h-[300px] "> {View}</div>

      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};
