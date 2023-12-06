import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data';
import styles from '../../styles/style';
import { ProductCard } from '../Route/ProductCard/ProductCard';

export const SuggestedProduct = ({data}) => {
    const [products,setProducts] =useState(null);
    useEffect(()=>{
        const d = productData && productData.filter((i)=>i.category == data.category)
        setProducts(d)
    },[])
  return (
    <div>
        {data?(
            <div className={`${styles.section}`}>
                <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-2`}>Related Products</h2>
                <div className="grid grid-cols-1 gap-[20px] md:grid-col-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[35px] mb-12 border-0">
                    {products && products.map((i,index)=>(
                        <ProductCard data={i} key={index}/>
                    ))}
                </div>
            </div> 
        ):null}
    </div>
  )
}
