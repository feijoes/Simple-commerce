import React from 'react';
import {Link } from 'react-router-dom';
import '../static/css/Product.css'

const Product = (props) => {
  return (
    <Link className="link" to={"/" + props.product.id}>
    <div className="row product">
       
      <div className="col-md-4">
        <img src={props.product.image} alt={props.product.image} height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>{props.product.name}</h4>
        <p>{props.product.description}</p>
      </div>
      <div className="col-md-2 product-price">
        {props.product.price}
      </div>
    </div>
    </Link>
  
  );
}
      
export default Product;