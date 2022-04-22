import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sorting.scss'

const Sorting = ({sort}) => {
    const navigate = useNavigate()
    const handleSort = (e) =>{
        navigate(`?sort=${e.target.value}`)
    }
  return (
    <div className="sorting">
        <select value={sort} onChange={handleSort}>
            <option value="-createAt">Newest</option>
            <option value="price">Price: Low-High</option>
        </select>
    </div>
  )
}

export default Sorting