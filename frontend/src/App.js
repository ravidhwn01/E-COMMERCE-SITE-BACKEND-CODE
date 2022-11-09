import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import webfont from 'webfontloader';
import Footer from "./components/layout/footer/Footer.js";



function App() {
  React.useEffect(()=>{
    webfont.load({
      google: {
        families: ['Roboto','Droid- sans', 'sans-serif']
      }
    });
  },[])
  return (
    <Router>
      <Header />
      <Footer/>
    </Router>
  );
}
export default App;
