import React, { useState } from "react";
import { productData } from "../../static/data";
import { ProductCard } from "../Route/ProductCard/ProductCard";
import styles from "../../styles/style";
import { Link } from "react-router-dom";

export const ShopProfileData = ({ isOwner }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full">
      {/* content heading */}
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <div
              className={`font-[600] text-[20px] cursor-pointer ${
                active === 1 ? "text-[red]" : "text-[#333]"
              } pr-[20px]`}
            >
              {" "}
              Shop Products
            </div>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <div
              className={`font-[600] text-[20px] cursor-pointer ${
                active === 2 ? "text-[red]" : "text-[#333]"
              } pr-[20px]`}
            >
              Running Events
            </div>
          </div>
          <div className="flex items-center" onClick={() => setActive(3)}>
            <div
              className={`font-[600] text-[20px] cursor-pointer ${
                active === 3 ? "text-[red]" : "text-[#333]"
              } pr-[20px]`}
            >
              Shop Reviews
            </div>
          </div>
        </div>

        {/*  isOwner*/}
        <div>
          {isOwner && (
            <div>
              <Link to={"/dashboard"}>
                <div className={`${styles.button} !rounded-p[4px] !h-[42px]`}>
                  {" "}
                  <span className="text-white">Go to Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/*  */}
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0 ">
        {productData &&
          productData.map((i, index) => {
            return <ProductCard key={index} data={i} isShop={true} />;
          })}
      </div>
    </div>
  );
};
