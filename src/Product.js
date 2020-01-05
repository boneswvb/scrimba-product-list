import React from 'react';

function Product(props) {
	return(
   	<div>
   		<h1>Product Name: {props.productData.name}</h1>
   		<h2>Price: R{props.productData.price}.00</h2>
   		<p>Description: {props.productData.description}</p>
   	</div>
  );
}

export default Product;