import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import webfont from 'webfontloader';
import Footer from "./components/layout/footer/Footer.js";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/product/ProductDetails.js";



function App() {
  React.useEffect(()=>{
    webfont.load({
      google: {
        families: ['Roboto','Droid Sans', 'Chilanka']
      }
    });
  },[])
  return (
    <Router>
      <Header />
    <Route exact path="/" component = {Home} />
    <Route exact path="/product/:id" component = {ProductDetails} />
  
      <Footer/>
    </Router>
  );
}
export default App;
