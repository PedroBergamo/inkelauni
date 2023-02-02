import React from "react"
import {Row,Col} from 'react-bootstrap';
import "../css/components.css";

import Elina from "../images/Elina-2.jpg"
var Ticket1 = "https://www.eventbrite.com/e/inke-launi-at-oranssi-klubi-rebekka-holi-and-auringonliitto-tickets-530678061367"
var Tuba = "https://www.tiketti.fi/inke-launi-tuba-food-lounge-oulu-lippuja/87929?fbclid=IwAR1yPTIOAUVzUrp7Yz61jl17A0PP9Sczt1l65WQVEFkKuJFOlfIASPjBXHo"
var Events = "https://www.facebook.com/inkelauni/events"
export default class Gigs extends React.Component {
    render(){
      return(
        <div className="keikat">
        <h1>Keikat</h1>
        <Row>
        <Col xs={12} lg={4} className="d-none d-lg-block">
        <img src={Elina} width="100%" alt=""/>
        </Col>
        <Col xs={12} lg={8}>
                <Row>
                  <Col className="date">
                    <h2>24.2</h2>
                    <div>
                      <p>Pub Virasto</p>
                      <p>Lahti</p>
                    </div>
                    </Col>
                  <Col className="gig-button">
                  <a href={Events} target="_blank" rel="noreferrer">
                    <button type="button">Tapahtuma</button>
                  </a>
                  </Col>
                </Row>

                <Row>
                  <Col className="date">
                  <h2>25.2</h2>
                  <div>
                    <p>Oranssi</p>
                    <p>Helsinki</p>
                  </div>
                  </Col>
                  <Col className="gig-button">
                  <a href={Ticket1} target="_blank" rel="noreferrer">
                    <button type="button">Liput</button>
                  </a>
                  </Col>
                </Row>

                <Row>
                  <Col className="date">
                  <h2>03.3</h2>
                  <div>
                    <p>Kaivuri</p>
                    <p>Kuopio</p>
                  </div>
                  </Col>
                  <Col className="gig-button">
                  <a href={Events} target="_blank" rel="noreferrer">
                    <button type="button">Tapahtuma</button>
                  </a>
                  </Col>
                </Row>

                <Row>
                  <Col className="date">
                  <h2>04.3</h2>
                  <div>
                    <p>Tuba</p>
                    <p>Oulu</p>
                  </div>
                  </Col>

                  <Col className="gig-button">
                  <a href={Tuba} target="_blank" rel="noreferrer">
                    <button type="button">Liput</button>
                  </a>
                  </Col>
                </Row>
        </Col>

        </Row>


        </div>
      );
    }
}
