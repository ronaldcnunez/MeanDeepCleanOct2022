import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Fast and Free <strong className="purple">Quotes! </strong> 

        </h1>
        <p style={{ color: "white" }}>
          Get an accurate quote in just seconds! 

          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" 
            style={{ 
                width:'80%',
                display: 'block',
                overflow: 'auto'
            }} >
            <ProjectCard
              title="Booking system will be where the image is "
              description="Book a quote in just seconds. All pricing is accurate and credit cards are not charged until after service is rendered"
              fbLink="https://www.facebook.com/MeanDeepCleanNJ"
              glink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x89c2ff41b04625f9:0xf301455e8eddc046?source=g.page.share"
            />

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
