import React from "react";
import Particle from "../Particle";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import InnerHTML from 'dangerously-set-html-content'



  const html = `
  <script src="https://ronaldscleaningcompany.launch27.com/jsbundle"></script>
  <iframe id="booking-widget-iframe" src="https://ronaldscleaningcompany.launch27.com/?w_cleaning" 
  style="border:none;width:100%;min-height:500px;overflow:hidden" scrolling="yes">
  </iframe>

`

function Residential() {
  return (
    <div>
      <Particle/>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          </Row>
            <Row className="resume">
              <InnerHTML html={html}/>        
            </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
      </Container>
    </div>
  );
}
export default Residential;
