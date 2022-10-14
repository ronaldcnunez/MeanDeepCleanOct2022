import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaTiktok, FaReceipt } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";



function LaundryServices() {
  let navigate = useNavigate();

  const navigateBookNow = () => {
    navigate('/booknow');
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Laundry: America's Least favorite task{" "}
                <span  role="img" >
                  🧺 👔 👚
                </span>
              </h1>
              <h1 className="heading-name">
                Mean Deep Clean's
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Laundry Services</strong>  are here to help! 
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter 
                options={{ 
                  strings: [
                    "Washing",
                    "Drying",
                    "Folding",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}/>              
              </div>
            </Col>
            </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3.6em" }}>
            <span className="purple"> Mean Deep Clean </span> your laundry! 
            </h1>
            <p className="home-about-body">
              Tired of spending nights and weekends doing laundry?  
              <b className="purple"> {" "} Mean Deep Clean </b>
              is ready to help. We offer laundry services that help you check even more items off your to-do list. 
              We will deliver a 
              <b className="purple"> {" "} clean </b> home, 
              <b className="purple"> {" "} fresh laundry </b>, and more time to focus on the 
              <b className="purple"> {" "} important </b> things in life.
              <br/>
              <br/>
              <b className="purple">
                Laundry 
                </b>
                {" "} is an add-on to any  {" "}
                <b className="purple">
                Standard   
                </b>
                {" "} or {" "}
                <b className="purple">
                Deep Clean  
                </b>
                {" "} appointment. {" "}
                <br/>
                <br/>
            <Button onClick={navigateBookNow} style={{ width: "500px" }} >
              <FaReceipt />
                &nbsp; Free Estimate  
            </Button>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find us on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us on all your favorite social platforms
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/MeanDeepCleanNJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/meandeepclean/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@meandeepclean"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://g.page/MeanDeepClean?share"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineGoogle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>    
    </section>
  );
}

export default LaundryServices;