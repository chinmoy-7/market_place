import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/style";
import { HiMinus, HiPlus } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

export const WishList = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 ssd and 8gb RAM silver color",
      description: "test",
      price: 1000,
    },
    {
      name: "Iphone 14 pro max 256 ssd and 8gb RAM silver color",
      description: "test",
      price: 200,
    },
    {
      name: "Iphone 14 pro max 256 ssd and 8gb RAM silver color",
      description: "test",
      price: 3000,
    },
    
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 ">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/* Items length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* cart single items */}
          <br />
          <div className="w-full border-t h-screen  overflow-y-scroll">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer"/>
        <img src="https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" className="w-[80px] h-[80px] ml-2" alt="" />
        {/* <img src="https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" className="w-[80px] h-[80px] ml-2" alt="" /> */}
        <div className="pl-[5px] ">
            <h1>{data.name}</h1>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            &#8377;{totalPrice}
            </h4>
        </div>
        <div>
            <BsCartPlus size={20} className="cursor-pointer" title="Add to cart"/>
        </div>
      </div>
    </div>
  );
};
