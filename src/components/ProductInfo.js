import React from 'react'
import './ProductInfo.scss'

const ProductInfo = ({product}) => {
    return (
    <div className='product__info'>
        <img src={product.image} alt={`pic of ${product.title}`} />
        <div className="box">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <h4>Category: {product.category}</h4>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductInfo