import React from "react";
import playStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'
import  "./Footer.css";
export default function Footer() {
  return (
    <footer id="footer">
    {/*  Footer content left */}
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      {/*  Footer content right */}
      <div className="midFooter">
          <h1>ECOMMERCE. </h1>
          <p>High Quality is our first priority</p>
          <p>© 2022 Ecommerce. RaviDhawan </p>
      </div>
      {/*  Footer content right */}
      <div className="rightFooter">
        <h3>follow Us</h3>
        <p>Let us be social</p>
       <a href="https://www.instagram.com/_ravi_dhwn/" target="_blank" rel="noreferrer" > Instagram </a>
       <a href="https://www.youtube.com/channel/UC-rEZAOdiqwqasyCgM9wyPA" target="_blank" rel="noreferrer" > Youtube </a>
       <a href="https://github.com/ravidhwn01" target="_blank" rel="noreferrer" > Github </a>
      </div>
    </footer>
  );
}
