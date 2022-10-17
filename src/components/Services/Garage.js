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



function GarageServices() {
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
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                Mean Deep Clean's
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Residential Cleaning</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter 
                options={{ 
                  strings: [
                    "Houses",
                    "Apartments",
                    "Condos",
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
              Getting to know  <span className="purple"> Mean Deep Clean </span>
            </h1>
            <p className="home-about-body">
              If you dream of walking into an immaculate home without taking the time or effort of cleaning it, 
              <b className="purple"> {" "} Mean Deep Clean </b>
              is ready to help. With our regular cleaning service, we provide you with an outstanding cleaning job at an 
              <b className="purple"> {" "} affordable price. </b>
              Our dedicated cleaners are 
              <b className="purple"> {" "} true professionals </b>
                and make sure your home is transformed into a spotless place. 
              They systematically review the space, develop a strategy to perform the job and waste no time in 
              <b className="purple"> {" "} removing dirt, sanitizing, vacuuming, Swiffering and cleaning </b>
               areas that never receive attention.
              <br />
              <br /> 
              Every regular cleaning includes {" "} 
              <b className="purple">
                bathrooms, kitchen, common room and bedrooms. 
              </b>  
              {" "} We also bring all  
              <b className="purple"> {" "}
                cleaning supplies
              </b>  
              {" "}and will use yours if requested.
              <i>  
              <br />
              <br /> 
              All our standard cleanings include {" "} 
              <b className="purple"> dusting  </b>{" "} &amp;              
              <b className="purple"> {" "} washing </b>of all reachable surfaces, 
              <b className="purple"> {" "} wiping </b>the exterior of all kitchen appliances &amp;  
              <b className="purple"> {" "} cabinets </b>. 
              <b className="purple"> cleaning  </b>of the bathrooms {" "}&amp;    
              <b className="purple"> {" "} vacuuming</b> {" "}&amp;
              <b className="purple"> {" "} Swiffering </b>of all floors.
              <br/>
              <br/>
              <br/>
              <b className="purple">
                Deep cleans 
                </b>
                {" "} are also available and {" "}
                <b className="purple">
                recommended  
                </b>
                {" "} for {" "}
                <b className="purple">
                first time services  
                </b>
                {" "} services. {" "}
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

export default GarageServices;