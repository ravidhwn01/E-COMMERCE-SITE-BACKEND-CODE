import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import webfont from 'webfontloader';
import Footer from "./components/layout/footer/Footer.js";
import Home from "./components/Home/Home.js";



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
  
      <Footer/>
    </Router>
  );
}
export default App;
