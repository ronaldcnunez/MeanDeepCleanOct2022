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


function CabinetServices() {
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
                Say "Goodbye" to messy cabinets{" "}
                <span  role="img" >
                😮‍💨
                </span>
              </h1>
              <h1 className="heading-name">
                Mean Deep Clean's
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Cabinet Cleaning and Organization</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter 
                options={{ 
                  strings: [
                    "Kitchen Cabinets",
                    "Closets",
                    "Pantry ",
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
              Mean Deep Clean's  <span className="purple"> Organization Unit </span>
            </h1>
            <p className="home-about-body">
              Are you tired of opening up your kitchen cabinets and finding a mess? How about that bedroom closest that has clothes just laying around? Is your pantry in serious need of TLC?
              <b className="purple"> {" "} Mean Deep Clean </b> can help! Our dedicated cleaners are <b className="purple"> {" "} true professionals </b>
              that can reorganize these spaces to maximum space and comfort. Our experts will clean the area then organize the space in a way that best suits you and your family's needs.
              <br />
              <br /> 
              Our<b className="purple"> {" "} organization services </b> are usually an add-on but we can accomdate standalone organization request {" "} 
            </p>
            <br/>
              <br/>
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

export default CabinetServices;