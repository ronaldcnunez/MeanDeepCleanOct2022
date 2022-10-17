import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaTiktok, FaReceipt } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";



function FloodedServices() {
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
                Oh No!{" "}
                <span className="wave" role="img" aria-labelledby="wave"> 🌊</span><span role="img" >🏘️</span>   
                

              </h1>
              <h1 className="heading-name">
                Mean Deep Clean's
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Flood Services</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter 
                options={{ 
                  strings: [
                    "Basements",
                    "Garage",
                    "Crawl Space ",
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
            <h1 style={{ fontSize: "2.6em" }}>
              Mean Deep Clean  <span className="purple"> Rapid Response Team </span>
            </h1>
            <p className="home-about-body">
              Did you walk into your basement to find a pool of murky water?  
              <b className="purple"> {" "} Mean Deep Clean </b>
              is ready to help. With our rapid response team available 
             <b className="purple"> {" "} 24/7 365 days a year </b> you can expect an immediate response. 
              <br />
              <br /> 
              Our dedicated cleaners are <b className="purple"> {" "} true professionals </b>
              who will come in assess the situation and get right to work.
              First they <b className="purple"> {" "} remove the water </b> that can cause damage to both your home and your<b className="purple"> {" "} family's health </b>
              then our cleaners will begin a <b className="purple"> {" "}deep clean</b> of the area to eliminate any 
              <b className="purple"> {" "}germs, mold and mildew.</b>             
              <br />
              <br /> 
            </p>
            <Button onClick={navigateBookNow} style={{ width: "500px" }} >
              <FaReceipt />
                &nbsp; Free Estimate  
            </Button>
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

export default FloodedServices;