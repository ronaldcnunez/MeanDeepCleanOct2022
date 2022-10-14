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


function MovingServices() {
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
                  Move-in Move-out Cleanings{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  🎉 🎊 🍾
                  </span>
                </h1>
                <h1 className="heading-name">
                  Mean Deep Clean's
                </h1>
                <h1 className="heading-name">
                  <strong className="main-name"> Move-in Move-out  </strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Typewriter 
                  options={{ 
                    strings: [
                      "Holiday Parties",
                      "Birthdays",
                      "Graduations",
                      "Engagement Parties",
                      "Baby Showers"
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
                Party with  <span className="purple"> Mean Deep Clean </span>
              </h1>
              <p className="home-about-body">
                What's the best part of hosting an event at your house? <b className="purple"> {" "} Cleaning</b>{" "}
                up the following morning... <b className="purple"> {" "} Said no one ever. </b>
                Want to impress guests with a <b className="purple"> {" "} Spotless Home</b>?{" "}
                <b className="purple"> {" "} Mean Deep Clean </b>{" "} is here to help! 
                <br/> 
                <br/> 
                <b className="purple"> {" "}Plan your party </b> let us take care of the <b className="purple"> {" "}cleaning.</b>{" "}
                Book your appointment one day in advance and as the famous infomercial said <b className="purple"> {" "}Set it and Forget it! </b>
                  Our team of professionals will <b className="purple"> {" "}deep clean </b>{" "} your home to ensure you can back to your routine.
                <br />
                <br /> 
                Our Party clean up  includes a deep cleaning of the  {" "} 
                <b className="purple">
                  bathrooms, kitchen, common areas and bedrooms &amp; dishes  
                </b>  
                {" "} We also bring all  
                <b className="purple"> {" "}
                  cleaning supplies
                </b>  
                {" "}and will use yours if requested.
                <i>  
                <br />
                <br/>
                <b className="purple">
                  Post Party cleanings 
                  </b>
                  {" "} are a standalone   {" "}
                  <b className="purple">
                  Service   
                  </b>
                  {" "} and {" "}
                  <b className="purple">
                  is a thorough deep clean to your home or event space.
                  </b>
                </i>
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

export default MovingServices;