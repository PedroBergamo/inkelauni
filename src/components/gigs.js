import React from "react"
import {Row,Col} from 'react-bootstrap';
import "../css/components.css";

import Elina from "../images/Elina.jpg"
export default class Gigs extends React.Component {
    render(){
      return(
        <div className="keikat">
        <h1>Keikat</h1>

        <Row>
          <Col className="date">
          <h2>29.6.2023</h2>
          <div>
            <p className="text-left">Lepakkomies</p>
            <p className="text-left">Helsinki</p>
          </div>
          </Col>

        </Row>
        <Row>
          <Col className="date">
          <h2>26.7.2023</h2>
          <div>
            <p className="text-left">Poppari</p>
            <p className="text-left">Jyväskylä</p>
          </div>
          </Col>
        </Row>

        <Row>
          <Col className="date">
          <h2>27.7.2023</h2>
          <div>
            <p className="text-left">Hönö</p>
            <p className="text-left">Tampere</p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col className="date">
          <h2>28.7.2023</h2>
          <div>
            <p className="text-left">Hard Rock House</p>
            <p className="text-left">Helsinki</p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col className="date">
          <h2>25.8.2023</h2>
          <div>
            <p className="text-left">Bar Loose</p>
            <p className="text-left">Helsinki</p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col className="date">
          <h2>25.1.2024</h2>
          <div>
            <p className="text-left">On The Rocks</p>
            <p className="text-left">Helsinki</p>
          </div>
          </Col>
        </Row>

        <h3> Menneet Keikat</h3>
        <Row>
        <Col xs={12} lg={6} className="d-none d-lg-block">
        <img src={Elina} width="100%" alt=""/>
        </Col>
        <Col xs={12} lg={6}>
                <Row>

                  <Col className="date">
                    <h2>24.2.2023</h2>
                    <div>
                      <p className="text-left">Pub Virasto</p>
                      <p className="text-left">Lahti</p>
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
                  <h2>25.2.2023</h2>
                  <div>
                    <p className="text-left">Oranssi</p>
                    <p className="text-left">Helsinki</p>
                  </div>
                  </Col>

                </Row>

                <Row>
                  <Col className="date">
                  <h2>01.3.2023</h2>
                  <div>
                    <p className="text-left">Lepakkomies</p>
                    <p className="text-left">Helsinki</p>
                  </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="date">
                  <h2>03.3.2023</h2>
                  <div>
                    <p className="text-left">Kaivuri</p>
                    <p className="text-left">Kuopio</p>
                  </div>
                  </Col>
                  <Col className="gig-button">

                  </Col>
                </Row>

                <Row>
                  <Col className="date">
                  <h2>04.3.2023</h2>
                  <div>
                    <p className="text-left">Tuba</p>
                    <p className="text-left">Oulu</p>
                  </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="date">
                    <h2>09.3.2023</h2>
                    <div>
                      <p className="text-left">On the Rocks</p>
                      <p className="text-left">Helsinki</p>
                    </div>
                    </Col>
                </Row>
        </Col>

        </Row>


        </div>
      );
    }
}
