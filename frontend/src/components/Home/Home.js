import React from "react";
import "./Home.css";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
function Home() {
  return (
    <>
      <div className="banner">
        <p>welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
          scroll &nbsp; <FaBars />
           </button>
        </a>

      </div>
    </>
  );
}

export default Home;
