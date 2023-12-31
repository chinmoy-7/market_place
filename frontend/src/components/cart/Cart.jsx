import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/style";
import { HiMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Cart = ({ setOpenCart }) => {
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
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Items length */}
          <div className={`${styles.noramlFlex} p-4 `}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* cart single items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        <div className="px-5 mb-3 ">
            {/* Checkout Button */}
            <Link to="/checkout">
                <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}>
                    <h1 className="text-white text-[18px]">Checkout Now (&#8377;9000)</h1>
                </div>
            </Link>
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
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex}  justify-center cursor-pointer`}
            onClick={() => setValue((value) => value + 1)}
          >
            <HiPlus size={16} color="white" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb147] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue((value) => (value === 1 ? 1 : value - 1))}
          >
            <HiMinus size={16} />
          </div>
        </div>
        <img src="https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" className="w-[80px] h-[80px] ml-2" alt="" />
        <div className="pl-[5px] ">
            <h1>{data.name}</h1>
            <h4 className="font-[400] text-[15px] text-[#00000082]">&#8377;{data.price}*{value}</h4>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            &#8377;{totalPrice}
            </h4>
        </div>
        <RxCross1 size={16} className="cursor-pointer"/>
      </div>
    </div>
  );
};
