import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

import bathroom from "../../Assets/bathroom.jpeg";
import bedroom from "../../Assets/bedroom.jpeg";
import kitchen from "../../Assets/kitchen.jpeg";
import livingroom from "../../Assets/livingroom.jpeg";
import basement from "../../Assets/IMG1637.jpg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={bathroom} className="img-fluid"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={bedroom} className="img-fluid"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={kitchen} className="img-fluid"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={livingroom} className="img-fluid"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={basement} className="img-fluid"  />
      </Col>
    </Row>
  );
}

export default Toolstack;
