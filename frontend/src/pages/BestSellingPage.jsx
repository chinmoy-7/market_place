import React, { useEffect, useState } from "react";
import { Header } from "../components/Layout/Header";
import styles from "../styles/style";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import { ProductCard } from "../components/Route/ProductCard/ProductCard";

export const BestSellingPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const d = productData &&productData.sort((a,b)=>b.total_sell-a.total_sell)
    setData(d)
    // window.scrollTo(0,0)
  },[]);
  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid  grid-cols-1 gap-[20px] md:grid-col-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[35px] mb-12 border-0">
          {data && data.map((i, index) => <ProductCard key={index} data={i} />)}
        </div>
      </div>
    </div>
  );
};
