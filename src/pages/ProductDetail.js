import React, { useEffect, useState } from 'react'
import useQuery from '../hooks/useQuery'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'

const ProductDetail = () => {
  const {id} = useParams()

  const {data: product ,loading,error} = useQuery(`http://localhost:3000/products/?_id=${id}`)
  
  return (
    <div>
      {product&&<ProductInfo product={product[0]}/>}
    </div>
  )
}

export default ProductDetail