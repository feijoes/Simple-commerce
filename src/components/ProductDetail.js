
import React from "react"
import {useParams} from "react-router-dom"
import data from "../data"
import {Link } from 'react-router-dom';
function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = data.find(prod => prod.id === productId)
 
    return (
        <div className="produtito">
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <img src={thisProduct.image} alt={thisProduct.image} height="300" />
        <h4>{thisProduct.name}</h4>
        <p>{thisProduct.description}</p>
        {thisProduct.price}
      <button className=''>comprar</button>
  
      </div>
    )
}

export default ProductDetail