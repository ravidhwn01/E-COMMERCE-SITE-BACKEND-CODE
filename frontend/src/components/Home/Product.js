import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Product({ product }) {
  const options = {
    edit: false,
    color:"rgba(20 ,20, 20, 0,.01)",
    activeColor: "tomato",
    // size: window.innerWidth < 600?20:25,
    value:2.5,
    isHalf: true,

  };
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.image[0].url} alt={product.name} />
      <p> {product.name} </p>

      <div>
        <ReactStars {...options} /> <span>256 Reviews </span>
      </div>
      <span>{product.price}</span>
    </Link>
  );
}

export default Product;
