import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Pagination.scss'

const Pagination = ({totalPage,page}) => {
    const navigate = useNavigate()

    const newArray = [...Array(totalPage)].map((e,index) => index + 1)

    const prev = ()=>{
        if(page<=1){
            navigate(`?page=1`)
        }else{
            navigate(`?page=${page - 1}`)
        }
    }
    const next = () =>{
        if(page >= totalPage){
            navigate(`?page=${totalPage}`)
        }else{
            navigate(`?page=${page + 1}`)
        }
    }

    const jump = (num) =>{
        navigate(`?page=${num}`)
    }

  return (
    <div className="pagination">
        <button
            onClick={prev}
        >&laquo;</button>
        {
            newArray.map((item,index) =>(
                <button 
                    key={index} 
                    className={page===item?'active':''}
                    onClick={()=>jump(item)}
                    >{item}</button>
            ))
        }
        <button
            onClick={next}
        >&raquo;</button>
    </div>
  )
}

export default Pagination