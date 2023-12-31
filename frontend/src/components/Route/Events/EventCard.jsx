import React from "react";
import styles from "../../../styles/style";
import {CountDown} from "./CountDown.jsx"
export const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active?"unset":"mb-12"} lg:flex p-2`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Iphone 14 pro max 8/256gb ssd
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus
          eaque nemo possimus quibusdam perspiciatis eligendi voluptatibus
          voluptates distinctio quos, quasi reprehenderit eveniet animi dicta, a
          non dolores? Nostrum, natus.
        </p>
        <div className="py-2 flex justify-between">
            <div className="flex ">
                <h5 className={`font-[500] text-[18px] text-[#d55b45] pr-3 line-through`}>&#8377;1099</h5>
                <h5 className="font-bold text-[20px] text-[#333] font-Roboto">&#8377;999</h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-[#44A55E]">120 Sold</span>
        </div>
        <CountDown/>
      </div>
    </div>
  );
};
