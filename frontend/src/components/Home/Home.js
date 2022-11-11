import React from "react";
import "./Home.css";
import Product from "./Product.js";
import { CiCircleChevDown } from "react-icons/ci";
function Home() {
  const product = {
    name: "black shirt",
    image:[ {url: "https://live-files.ynfinite.de/v1/image/5f475074d3ae9a0021adecda/ee400_neo_weiss_liegend_bearbeitet_optak.jpg"}],
    price:"₹1200",
    _id: "123456",
  }
  return (
    <>
      <div className="banner">
        <p>welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            scroll
            &nbsp;
            <CiCircleChevDown />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">
        <span>Featured Products</span>
      </h2>
      <div className="container" id="container">
        <Product product = {product}  />
        <Product product = {product}  />
        <Product product = {product}  />
        <Product product = {product}  />
        <Product product = {product}  />
        <Product product = {product}  />
        <Product product = {product}  />
        <Product product = {product}  />
      
        </div>
    </>
  );
}

export default Home;
