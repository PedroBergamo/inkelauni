import React from "react"
import {Row,Col} from 'react-bootstrap';
import "../css/components.css";

import Elina from "../images/Elina.jpg"
export default class Gigs extends React.Component {
    render(){
      return(
        <div className="keikat">
        <h1>Keikat</h1>
        <h3> Meneet Keikat</h3>
        <Row>
        <Col xs={12} lg={6} className="d-none d-lg-block">
        <img src={Elina} width="100%" alt=""/>
        </Col>
        <Col xs={12} lg={6}>
                <Row>

                  <Col className="date">
                    <h2>24.2</h2>
                    <div>
                      <p>Pub Virasto</p>
                      <p>Lahti</p>
                    </div>
                    </Col>
                {/*
                  <Col className="gig-button">
                <a href={Events} target="_blank" rel="noreferrer">
                  <button type="button">Tapahtuma</button>
                </a>
                </Col>
                  */}
                </Row>



                <Row>
                  <Col className="date">
                  <h2>25.2</h2>
                  <div>
                    <p>Oranssi</p>
                    <p>Helsinki</p>
                  </div>
                  </Col>

                </Row>

                <Row>
                  <Col className="date">
                  <h2>01.3</h2>
                  <div>
                    <p>Lepakkomies</p>
                    <p>Helsinki</p>
                  </div>
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
                </Row>

                <Row>
                  <Col className="date">
                    <h2>09.3</h2>
                    <div>
                      <p>On the Rocks</p>
                      <p>Helsinki</p>
                    </div>
                    </Col>
                </Row>
        </Col>

        </Row>


        </div>
      );
    }
}
