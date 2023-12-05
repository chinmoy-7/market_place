import React from "react";
import styles from "../../../styles/style";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
        // "url(https://unsplash.com/photos/burning-coconut-husk-on-brass-colored-pot-LHCdZtJaDTk)",
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3a3a3a] font-[600] capitalize`}
        >
          Best items for
          <br /> Puja and celebration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odit
          consequatur accusamus, quas architecto est consectetur odio ducimus,
          consequuntur eos aliquam, qui obcaecati ipsa expedita magnam maiores
          facere deserunt doloremque.
        </p>
        <Link to="/products">
            <button className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
            </button>
        </Link>
      </div>
    </div>
  );
};
