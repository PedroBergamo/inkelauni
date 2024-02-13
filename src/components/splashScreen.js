import React from "react"
import "../css/components.css"

import Flower from "../resources/I-Flower.svg";

export default class SlashScreen extends React.Component{
  render(){
    return(
        <div className="splash-container">
        <div>
          <img src={Flower} width="300px" alt=""/>
        </div>
      </div>
    );
  }
}
