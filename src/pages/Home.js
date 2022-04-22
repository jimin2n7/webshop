import React, {useState, useEffect, useMemo} from 'react'
import Products from '../components/Products'
import useQuery from '../hooks/useQuery'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'
import Sorting from '../components/Sorting'

const Home = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(4)

  const {search} = useLocation()

  const {page, sort} = useMemo(()=>{
    const page = new URLSearchParams(search).get('page')||1
    const sort = new URLSearchParams(search).get('sort')||'createAt'
    return {page: Number(page), sort: sort}
  },[search])

  const {data, loading, error} = useQuery(`https://my-json-server.typicode.com/jimin2n7/dbshop/products?_limit=${limit}&_page=${page}&_sort=${sort}`)

  useEffect(()=>{
    if(data){
      setProducts(data)
    }
  },[data])

  const totalPage = useMemo(()=>{
      return Math.ceil(12/limit)
  },[page])

  return (
    <>  
        <Sorting/>
        <Products products={products}/>
        <Pagination totalPage ={totalPage} page={page}/>
    </>
  )
}

export default Home