import React, { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { BiMailSend } from "react-icons/bi";
import { GiBroom } from "react-icons/gi";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/logo.png";




function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [state, handleSubmit] = useForm("mnqrvakg");
  let navigate = useNavigate();


  const navigateBookNow = () => {
    navigate('/booknow');
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (state.succeeded) {
    navigate("/");

}

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          
            <form  
              style={{ maxWidth: "500px", justifyContent: "center", position: "relative"}} 
              method="POST" onSubmit={handleSubmit}>
                <Button onClick={navigateBookNow}
            style={{ maxWidth: "250px" }}
          >
            <GiBroom />
            &nbsp; Pricing and Services  
          </Button>
          <br/>
          <br/>

              <label htmlFor="name">Full Name</label>
              <input class= "form-control" id="name" type="text" name="name" placeholder="Your Name *" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            <br/>
              <label htmlFor="email">Email Address</label>
              <input class= "form-control" id="email" type="email" name="email" placeholder="Your Email *" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <br/>
            <br/>
              <label for="message">Message</label>
              <textarea class= "form-control" id="message" name="message" placeholder="Your Message *" required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            <br/>

              <Button
                exact path="/"
                variant="primary"
                type="submit" 
                disabled={state.submitting} 
                style={{ maxWidth: "250px" }}
              >
                <BiMailSend /> &nbsp;Submit
                <ValidationError errors={state.errors} />
              </Button>

            </form>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            
          </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;