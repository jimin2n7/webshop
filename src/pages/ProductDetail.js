import React from 'react'
import useQuery from '../hooks/useQuery'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'

const ProductDetail = () => {
  const {id} = useParams()

  const {data: product } = useQuery(`https://my-json-server.typicode.com/jimin2n7/dbshop/products/?_id=${id}`)
  
  return (
    <div>
      {product&&<ProductInfo product={product[0]}/>}
    </div>
  )
}

export default ProductDetail