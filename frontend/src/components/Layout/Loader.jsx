import Lottie, { useLottie } from "lottie-react";
import animationData from "../../Assets/animations/Animation.json";

import React from "react";

export const Loader = () => {
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
    <div>
      <div className="w-[full] h-screen flex items-center justify-center "> {View}</div>
    </div>
  );
};
