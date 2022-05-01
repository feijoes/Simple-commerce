
import React from "react"
import {useParams} from "react-router-dom"
import data from "../data"
import {Link } from 'react-router-dom';

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = data.find(prod => prod.id === productId)
    
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
        </>
    )
}

export default ProductDetail