import React from "react"
import "../css/components.css"

import SplashVideo from "../resources/splash-video.mp4";
import Logo from "../resources/logo.svg";

import virta from "../images/virta-logo.png";
var VirtaVideo = "https://www.youtube.com/watch?v=WcmWrsbxXYA";

export default class SlashScreen extends React.Component{
  render(){
    return(
        <div className="video-container">
        <video className="splash-video" autoPlay loop muted>
          <source src={SplashVideo} type="video/mp4"/>
        </video>

        <div className="logo">
          <img src={Logo} width="300px" alt=""/>
        </div>

          <div className="video-button">
          <img src={virta} width="50%" alt=""/>
              <a href={VirtaVideo} target= "_blank" rel="noreferrer">
              <button type="button">Katso nyt</button>  </a>
        </div>
      </div>
    );
  }
}
