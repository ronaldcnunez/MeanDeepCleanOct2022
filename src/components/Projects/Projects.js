import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import InnerHTML from 'dangerously-set-html-content'



  const html = `
  <script src="https://ronaldscleaningcompany.launch27.com/jsbundle"></script>
  <iframe id="booking-widget-iframe" src="https://ronaldscleaningcompany.launch27.com/?w_cleaning" 
  style="border:none;width:100%;min-height:450px;overflow:hidden" scrolling="yes">
  </iframe>

`



function Projects() {
  const [width, setWidth] = useState(700);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
export default Projects;
