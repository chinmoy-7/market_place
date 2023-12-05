import React from 'react'
import styles from '../../../styles/style'
import { productData } from '../../../static/data'
import { ProductCard } from '../ProductCard/ProductCard'

export const FeaturedProduct = () => {
  return (
    <div>
        <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
                <h1>Featured Products</h1>
            </div>
            <div className="grid  grid-cols-1 gap-[20px] md:grid-col-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[35px] mb-12 border-0">
                {productData && productData.map((i,index)=>(
                    <ProductCard data={i} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}