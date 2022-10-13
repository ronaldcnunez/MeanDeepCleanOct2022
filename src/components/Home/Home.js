import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Widget from "./Widget";
import InnerHTML from 'dangerously-set-html-content'
import {Helmet} from "react-helmet";


function Home() {
  const html = `
  <div> 
  <script src="https://apps.elfsight.com/p/platform.js" defer></script>
  <div class="elfsight-app-77aa2f63-fc92-4d64-b9de-1b0ca1464ef9"></div>
  </div>  `




  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome to 
                <strong className="main-name"> Mean Deep Clean</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <br/>           
            <InnerHTML html={html} className="img-fluid"               
              style={{ 
                alt:'home pic',
                float: 'left',
                height:'450px',
                position:'relative'
              }} />

            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

