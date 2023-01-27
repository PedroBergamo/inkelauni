import React from "react"
import {Row,Col} from 'react-bootstrap';
import "../css/components.css";

export default class Gigs extends React.Component {
    render(){
      return(
        <div className="keikat">
        <h1>Keikat</h1>

        <Row>
          <Col>
            <h2>24.2</h2>
          </Col>
          <Col>
            <p>Pub Virasto</p>
            <p>Lahti</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>25.2</h2>
          </Col>
          <Col>
            <p>Oranssi</p>
            <p>Helsinki</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>03.3</h2>
          </Col>
          <Col>
            <p>Kaivuri</p>
            <p>Kuopio</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2>04.3</h2>
          </Col>
          <Col>
            <p>Tuba</p>
            <p>Oulu</p>
          </Col>
        </Row>
        </div>
      );
    }
}
