import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { BiMailSend } from "react-icons/bi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useForm, ValidationError } from '@formspree/react';
import {ReactDom, useHistory} from 'react-dom';
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [state, handleSubmit] = useForm("mnqrvakg");
  let navigate = useNavigate();




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
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        </Row>

        <Row className="resume">
            <form  
              style={{ maxWidth: "500px", justifyContent: "center", position: "relative"}} 
              method="POST" onSubmit={handleSubmit}>
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
          </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;