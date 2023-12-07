import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backend_url } from "../../../server";

export const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0  z-30 flex items-center justify-between px-4 ">
      <div className="">
        <Link to={"/dashboard"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7_MrtLV0f1HFjcQ2WDLRdP9iVqngKRnXsA&usqp=CAU"
            // src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ height: "70px" }}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4 ">
          <Link to={"/dashboard/coupons"}>
            <AiOutlineGift
              color="#555"
              size={30}
              className="cursor-pointer mx-5  800px:block hidden"
            />
          </Link>
          <Link to={"/dashboard-events"}>
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="cursor-pointer mx-5  800px:block hidden"
            />
          </Link>
          <Link to={"/dashboard-products"}>
            <FiShoppingBag
              color="#555"
              size={30}
              className="cursor-pointer mx-5  800px:block hidden"
            />
          </Link>
          <Link to={"/dashboard-orders"}>
            <FiPackage
              color="#555"
              size={30}
              className="cursor-pointer mx-5  800px:block hidden"
            />
          </Link>
          <Link to={"/dashboard-messages  800px:block hidden"}>
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="cursor-pointer mx-5  800px:block hidden    "
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img src={`${backend_url}${seller.avatar}`} alt="" className="w-[50px] h-[50] rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};
