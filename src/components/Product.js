import React from 'react';
import {Link } from 'react-router-dom';
const Product = (props) => {
  return (
    <div className='col'>
      <img className="small" src={props.product.image} alt={props.product.name} />
      <h3>{props.product.name}</h3>
      <div>${props.product.price}</div>
      <div>
      <Link  className="btn btn-pink" role="button" to={"/" + props.product.id}> More Detail </Link>
      </div>
    </div>
  );
}
export default Product;