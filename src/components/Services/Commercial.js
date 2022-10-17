import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaTiktok } from 'react-icons/fa';
import Typewriter from "typewriter-effect";


function CommercialServices() {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                Mean Deep Clean's
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Commercial Cleaning</strong>
              </h1>
              <br/>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span  role="img" >
                🏢 🏥 🕍 🏦 🛕 🕌 ⛪
                </span>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter 
                options={{ 
                  strings: [
                    "Doctor's Office",
                    "AirBnB",
                    "Restaurants",
                    "Retail", 
                    "Banks",
                    "Places of Worship",
                    "Building"
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
              <span className="purple"> Mean Deep Clean </span>Commercial Cleaning 
            </h1>
            <p className="home-about-body">
              If you dream of walking into an immaculate office without taking the time or effort of cleaning it, 
              <b className="purple"> {" "} Mean Deep Clean </b>
              is ready to help. Whether you run a small business or are part of a large company, ensuring that your offices are kept 
              clean and tidy helps to create positive first impressions and improves employee morale and work ethic
              <br />
              <br /> 
              Our dedicated cleaners are 
              <b className="purple"> {" "} true professionals </b>
              that will provide you with an outstanding office cleaning job at an
              <b className="purple"> {" "} affordable price. </b>

                They systematically review the space, develop a strategy to perform the job and waste no time in 
              <b className="purple"> {" "} removing dirt, sanitizing, vacuuming, Swiffering and cleaning </b>
               areas that never receive attention.
              <br />
              <br /> 
              Our commercial cleanings are tailored to your needs and always include {" "} 
              <b className="purple">
              common areas, bullpens, cubicles, private work areas, kitchens, bathrooms, break areas, boardrooms, lobbies, reception, and everything in between. 
              </b>  
              {" "} We also bring all necessary 
              <b className="purple"> {" "}
                cleaning supplies
              </b>  
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

export default CommercialServices;