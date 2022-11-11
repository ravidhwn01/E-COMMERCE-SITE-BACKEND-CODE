import React from "react";
import "./Home.css";
import { CiCircleChevUp } from "react-icons/ci";
function Home() {
  return (
    <>
      <div className="banner">
        <p>welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            scroll &nbsp; <CiCircleChevUp />
          </button>
        </a>
      </div>
    </>
  );
}

export default Home;
