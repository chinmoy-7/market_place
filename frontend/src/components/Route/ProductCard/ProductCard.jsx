import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/style";
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {ProductDetailsCard} from '../ProductDetailsCard/ProductDetailsCard.jsx'

export const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-[#fff] rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40
              ? data.name.slice(0, 40) + "...."
              : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              color="#F6BA00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#F6BA00"
              size={20}
              className="mr-2 cursor-pointer"
            />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                <i class="fa fa-inr"></i>
                {data.price === 0 ? data.price : data.discount_price}
              </h5>
              <h4 className={`${styles.price}`}>
                {data.price ? <i class="fa fa-inr"></i> : null}
                {data.price ? data.price : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} sold
            </span>
          </div>
          </Link>
          {/* Side options */}
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-5 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer absolute right-5 top-5"
              size={22}
              onClick={() => setClick(!click)}
              color={click?"red":"#333"}
              title="Add to wishlist"
            />
          )}
             <AiOutlineEye
              className="cursor-pointer absolute right-5 top-14"
              size={22}
              onClick={() => setOpen(!open)}
              color="#333"
              title="Quick view"
            />
             <AiOutlineShoppingCart
              className="cursor-pointer absolute right-5 top-24"
              size={25}
              onClick={() => setOpen(!open)}
              color="#333"
              title="Add to cart"
            />
            {open?
            <ProductDetailsCard open={open} setOpen={setOpen} data={data}/>:null  
          }
      </div>
    </>
  );
};
