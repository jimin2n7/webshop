import React from 'react'
import {Link} from 'react-router-dom'
import './ProductCard.scss'

const ProductCard = ({product}) => {
  return (
    <div className='card'>
		<Link to={`/products/${product._id}`}>
		<img src={product.image} alt={`pic of ${product.title}`} />
		<div className="box">
			<h3>
				
					{product.title}
			</h3>
			<h4>${product.price}</h4>
			{/* <div className="btn_div">
				<button className="btn__edit">Edit</button>
				<button className="btn__delete">Delete</button>
			</div> */}
		</div>
		</Link>
	</div>
  )
}

export default ProductCard