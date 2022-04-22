import React from 'react'
import ProductCard from './ProductCard'
import './Products.scss'

const Products = ({products}) => {
  return (
    <div className='products'>
        {
            products.map((product)=>(
                <ProductCard key={product._id} product={product}/>
            ))
        }
    </div>
  )
}

export default Products