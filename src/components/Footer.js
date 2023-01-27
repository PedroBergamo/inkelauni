import { Row,Col} from 'react-bootstrap';
import React from 'react';
import Social from "./socialmedia.js";
import "../css/components.css"
var pedroSite = "https://bergamocreations.com/";

export default class SocialMedia extends React.Component {
    render() {
      return(
    <div className="footer">
      <Row>
      <Col>
      <h2 style={{color: 'black'}}>Tiedotus ja haastattelupyynnöt:</h2>
      <p style={{textAlign: 'center'}}>
        Juha Juoni / PressHopper<br/>
        juha.juoni@presshopper.fi<br/>
        www.presshopper.fi<br/>
      </p>
      </Col>
      <Col>
      <h2 style={{color: 'black'}}>Yhteystiedot</h2>
      <h3 style={{color: 'black'}}>inkelauni@gmail.com</h3>
      <Social/>

      <p style={{color: 'black'}}>©️ 2023 Inke Launi | Suunnitellut ja kehittänyt
      <a className="link" href={pedroSite}
      target="_blank" rel="noreferrer" style={{color: 'black'}}>Bergamo Creations</a></p>
      </Col>
      </Row>
    </div>
  );
}
}
